'use strict';

var gulp = require('../gulp');
var config = require('../config');
var plugins = require('../plugins');

gulp.task('styles', 'Compile scss', function compileScss () {
    return gulp.src(config.src.scss)
    .pipe(plugins.sass(config.sassOptions))
    .on('error', function handleError(err) {
        plugins.util.log(plugins.util.colors.red(err.toString()));
        if (config.isLocalServer) {
            this.emit('end');
        } else {
            process.exit(1);
        }
    })
    .pipe(plugins.autoprefixer({
        browsers: ['last 4 versions']
    }))
    .pipe(gulp.dest(config.src.dist)) // non minified version
    .pipe(plugins.rename(function rename (path) {
        path.extname = '.min.css';
    }))
    .pipe(plugins.csso())
    .pipe(gulp.dest(config.src.dist)); // minified version
});
