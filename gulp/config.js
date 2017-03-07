'use strict';

var version = require('../package.json').version;

var config = {
    version: version,
    src: {
        dist: 'dist/',
        tmp:  '.tmp/',
        scss: ['src/**/*.scss']
    },
    sassOptions: {
        includePaths: [
            './src',
            //'./node_modules/modularscale-sass/stylesheets/',
            //'./node_modules/breakpoint-sass/stylesheets/',
            //'./node_modules/susy/sass/'
        ],
        style: 'expanded'
    }
};

module.exports = exports = config;
