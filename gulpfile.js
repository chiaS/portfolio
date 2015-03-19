var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync');


gulp.task('css', function(){
  return gulp.src('style.less')
    .pipe(less())
    .pipe(gulp.dest('css'));
});

gulp.task('serve', ['css'], function(){
  browserSync({
    // notify: true,
    server: { baseDir: './'},
    files: ['index.html', './**/*.html']
  });

  gulp.watch('./**/*.less', ['css']);

});

gulp.task('default', ['serve']);