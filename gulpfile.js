const gulp = require('gulp'),
  sass = require('gulp-sass'),
  connect = require('gulp-connect');


gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(gulp.dest('./app'))
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./app/js/*.js')
    .pipe(gulp.dest('./app/js'))
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  gulp.src('./app/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/sass/*.scss'], ['sass']);
  gulp.watch(['./app/js/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);