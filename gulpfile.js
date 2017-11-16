var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var minify = require('gulp-minify');

const srcFolder = "src/";

gulp.task('sass', function(){
  return gulp.src(srcFolder + 'sass/import_style.scss')
    .pipe(sass({
      includePaths: [srcFolder + 'sass']
    }))
    .pipe(rename('main.css'))
    .pipe(gulp.dest(srcFolder + 'css'))
});
gulp.task('minify-css', function() {
  return gulp.src(srcFolder + 'css/main.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest(srcFolder + 'css/min'))
});
gulp.task('minify-js', function() {
  return gulp.src(srcFolder + 'js/*.js')
    .pipe(minify())
    .pipe(gulp.dest(srcFolder + 'js/min'))
});
gulp.task('watch', function(){
  gulp.watch(srcFolder + 'sass/*.scss', ['sass', 'minify-css']);
  gulp.watch(srcFolder + 'js/*.js', ['minify-js']);
});