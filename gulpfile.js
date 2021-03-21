'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass-front', function () {
  return gulp.src('./web/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./web/css'));
});
gulp.task('sass-back', function () {
  return gulp.src('./backend/web/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./backend/web/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./web/scss/**/*.scss', gulp.parallel('sass-front'));
  gulp.watch('./backend/web/scss/**/*.scss', gulp.parallel('sass-back'));
});