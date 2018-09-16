var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('style.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('./public'))
  });

gulp.task('watch', function(){
    gulp.watch('style.scss', ['sass']); 
    // Other watchers
})