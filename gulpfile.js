var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var syncronize = require( 'gulp-sync-dir' );
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-cssmin');
var plugins = require('gulp-load-plugins')();

gulp.task('default', ['init','watch']);

//Tareas que beben realizarce al iniciar
gulp.task('init', ['less','uglify','sync'])

//Sincronizar src con disc
gulp.task('sync', function() {
	//copiar las librerias
	gulp.src('src/lib/**/*')
    	.pipe(gulp.dest('dist/lib'));
	//copiar los html
	gulp.src('src/**/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
    	.pipe(gulp.dest('dist'))
		.pipe(livereload());
	//Eliminar los archivos borrados
    syncronize({
        src: 'src', //Source folder
        target: 'dist', //Output folder
        extensions: {},
        exclude: []
    });
});

//ofuscar archivos js
gulp.task('uglify', function () {
	return gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(livereload());
});

//convertir less a css, concatenar y minimizar 
gulp.task('less', function () {
	return gulp.src('src/css/*.less')
		.pipe(less())
		.pipe(concat('app.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('src/css'))
		.pipe(gulp.dest('dist/css'))
		.pipe(livereload());
});

//Vigilar cambios
gulp.task('watch', function () {
	livereload.listen();
    gulp.watch('src/js/*.js', ['uglify']);
    gulp.watch('src/css/*.less', ['less']);
	gulp.watch('src/**/*', ['sync']);
});