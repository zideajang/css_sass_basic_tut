// 'use strict';
// var gulp = require("gulp");
// var jade = require('gulp-jade');
// var sass = require('gulp-sass');
//  
// gulp.task('sass', function () {
//   return gulp.src('./src/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./dist/css/'));
// });
//  

 
// gulp.task('templates', function() {
//   var YOUR_LOCALS = {};
 
//   gulp.src('./src/**/*.jade')
//     .pipe(jade({
//       locals: YOUR_LOCALS
//     }))
//     .pipe(gulp.dest('./dist/'))
// });

// gulp.task('default', function () {
//   gulp.watch(['./src/**/*.scss','./src/**/*.jade'], ['templates','sass']);
// });

'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});