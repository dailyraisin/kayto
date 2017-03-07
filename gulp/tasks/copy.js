'use strict';

var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var csso = require('csso');
var fs = require('fs');
var gulp = require('../gulp');
var config = require('../config');
var plugins = require('../plugins');
var path = require('path');

var userScriptHeader = '// ==UserScript==\n' +
'// @name        kayto\n' +
'// @include     http://manually-add-your-own-domains.com/*\n' +
'// @namespace   kayto\n' +
'// @version     ' + config.version + '\n' +
'// @grant       none\n' +
'// ==/UserScript==\n\n';

gulp.task('copy', function () {
    var kaytoCss = csso.minify(fs.readFileSync('dist/kayto.min.css', 'utf8')).css.replace(/'/g, '\\\'');
    var kaytoFooter = fs.readFileSync('src/kayto-user-footer.js', 'utf8');

    return gulp.src(['src/kayto.js'])
        .pipe(webpackStream({
            output: { filename: 'kayto.js' }
        }, webpack))
        .pipe(gulp.dest(config.src.dist)) //plain old .js, no user-scripts header
        .pipe(plugins.rename(function (path) {
            path.extname = '.user.js';
        }))
        .pipe(plugins.header(userScriptHeader))
        .pipe(plugins.footer('\n'))
        .pipe(plugins.footer('//bake in the styles'))
        .pipe(plugins.footer('\n'))
        .pipe(plugins.footer(kaytoFooter))
        .pipe(plugins.replace('//css-string-here', kaytoCss))
        .pipe(gulp.dest(config.src.dist));
});
