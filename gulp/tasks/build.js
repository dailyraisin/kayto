'use strict';

var gulp = require('../gulp');

var gulpsync = require('gulp-sync')(gulp);

var buildTasks = [
    'clean',
    'styles', //styles must come before copy
    'copy'
];

gulp.task('build', 'Build everything', gulpsync.sync(buildTasks));
