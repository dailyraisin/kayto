'use strict';

var gulp = require('../gulp');
var config = require('../config');
var plugins = require('../plugins');

var magenta = plugins.util.colors.magenta;

gulp.task('clean', 'Clean dist/ and .tmp/', function (done) {
    var dirs = [
        config.src.dist,
        config.src.tmp
    ];
    plugins.util.log('Cleaning', magenta(dirs));
    plugins.del(dirs, done);
});
