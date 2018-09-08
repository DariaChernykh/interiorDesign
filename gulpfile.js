'use strict';

const gulp = require('gulp');
const scss = require('gulp-scss');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const autoprefoxer = require('gulp-autoprefoxer');

gulp.task('styles', function() {
  return gulp.src('scss/*.scss')
    .pipe(autoprefoxer)
    .pipe(sourcemaps.init())
    .pipe(scss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
});

gulp.task('clean', function () {
  return del('css')
});

gulp.task('default',
  ['clean', 'styles']
);

gulp.task('watch', function () {
  gulp.watch('scss/*.*', gulp.series('styles'));
});

gulp.task('dev', gulp.series('styles', 'watch'));

