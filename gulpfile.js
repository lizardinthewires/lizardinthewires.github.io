var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
  // livereload = require('gulp-livereload'),
  watch = require('gulp-watch');


gulp.task('sass', function () {
    return gulp.src('sass/main.scss')
    	.pipe(sass({ style: 'compressed' }))
    	.pipe(autoprefixer('last 2 version', 'ie 9', 'ios 6', 'android 4'))
    	.pipe(gulp.dest('css/'))
    	.pipe(rename({suffix: '.min'}))
});

gulp.task('scripts', function() {
  return gulp.src('js/.js')
    .pipe(uglify())
    .pipe(gulp.dest('min/'))
    .pipe(rename({suffix: '.min'}))
});

gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('sass/*.scss', ['sass']);

  // Watch .js files
  gulp.watch('js/*.js', ['scripts']);

  //Watch liveReload files
  // gulp.watch('*.html').on('change', livereload.changed);
  // gulp.watch('css/*.css').on('change', livereload.changed);

});

gulp.task('uncss', ['critical']);
gulp.task('default', ['sass', 'scripts', 'watch']);