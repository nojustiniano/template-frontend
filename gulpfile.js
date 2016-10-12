var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var plugins = require('gulp-load-plugins')();

gulp.task('default', ['less','minify','watch']);

gulp.task('minify', function () {
	return gulp.src('js/*.js')
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
});

gulp.task('less', function () {
	return gulp.src('less/*.less')
		.pipe(concat('app.css'))
		.pipe(plugins.cssmin())
		.pipe(gulp.dest('app/css'))
});

gulp.task('watch', function () {
    gulp.watch('js/*.js', ['minify']);
    gulp.watch('less/*.less', ['less']);
});