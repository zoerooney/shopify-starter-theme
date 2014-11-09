var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    newer = require('gulp-newer'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    imagemin = require('gulp-imagemin'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();
function replaceWithAssetURL( match, imgurl){
  return 'background:url({{ "'+ imgurl + '" | asset_url }})';
}    
gulp.task('styles', function() {
  return gulp.src(['assets/_scss/*.scss',
                   'assets/_scss/**/*.scss',
                   '!assets/_scss/checkout.scss',
                   '!assets/_scss/pages/_checkout.scss'], 
                   {base:  'assets/_scss'})
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(minifycss())
      .pipe(rename({extname: '.css.liquid'}))
      .pipe(replace(/background:url\((.*?)\)/g, replaceWithAssetURL))
      .pipe(gulp.dest('assets/'));
});
gulp.task('checkout', function() {
  return gulp.src(['assets/_scss/*.scss',
                   'assets/_scss/**/*.scss',
                   '!assets/_scss/style.scss'], 
                   {base:  'assets/_scss'})
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(minifycss())
      .pipe(rename({extname: '.scss.liquid'}))
      .pipe(gulp.dest('assets/'));
});
gulp.task('watch', function() {
  // Listen on port 35729
  server.listen(35729, function (err) {
      if (err) {
        return console.log(err)
      };
  
      // Watch .scss files
      gulp.watch(['assets/_scss/*.scss','assets/_scss/**/*.scss','!assets/_scss/checkout.scss','!assets/_scss/pages/_checkout.scss'], ['styles']);
      gulp.watch('assets/_scss/pages/_checkout.scss', ['checkout']);
    });

});