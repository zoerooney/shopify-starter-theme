var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();
    
gulp.task('default', function(){
  return gulp.src('assets/_scss/style.scss', {base: 'assets/_scss'})
      .pipe(plumber())
      .pipe(sass({ style: 'expanded' }))
      .pipe(gulp.dest('assets/'))
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(minifycss())
      .pipe(gulp.dest('assets/'))
      .pipe(livereload(server));
});
gulp.task('checkout', function(){
  return gulp.src('assets/_scss/checkout.scss')
      .pipe(plumber())
      .pipe(sass({ style: 'expanded' }))
      .pipe(gulp.dest('assets/'))
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(minifycss())
      .pipe(gulp.dest('assets/'))
      .pipe(livereload(server));
});
gulp.task('watch', function() {
  // Listen on port 35729
  server.listen(35729, function (err) {
      if (err) {
        return console.log(err)
      };
  
      // Watch .scss files
      gulp.watch('assets/**/*.scss', ['default']);
      gulp.watch('assets/**/_checkout.scss', ['checkout']);
    });

});