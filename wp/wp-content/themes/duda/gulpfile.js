var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	// concat = require('gulp-concat'),
	// uglify = require('gulp-uglify'),
  livereload = require('gulp-livereload');
  watch = require('gulp-watch');


gulp.task('sass', function () {
    return gulp.src('scss/*.*')
    	.pipe(sass({ style: 'compressed' }))
    	.pipe(autoprefixer('last 2 version', 'ie 9', 'ios 6', 'android 4'))
    	.pipe(gulp.dest('css/'))
    	.pipe(rename({suffix: '.min'}));
});

// gulp.task('scripts', function() {
//   return gulp.src('js/**/*.js')
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest('js'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(uglify())
//     .pipe(gulp.dest('js'))
// });

gulp.task('watch', function() {
  livereload.listen();
  // Watch .scss files
  gulp.watch('scss/*.scss', ['sass']);

  //Watch liveReload files
  gulp.watch('*.php').on('change', livereload.changed);
  gulp.watch('css/*.css').on('change', livereload.changed);

  // Watch .js files
  // gulp.watch('js/*.js', ['scripts']);

});

gulp.task('default', ['sass', 'watch']);