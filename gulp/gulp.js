'use strict';

var gulp = require('gulp-help')(require('gulp'), {
    hideEmpty: true,
    hideDepsMessage: true
});

// default task tells you what is available
gulp.task('default', false, ['help']);

// gulp help instansiated version of gulp
module.exports = exports = gulp;
