var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    concat = require('gulp-concat'),
    spritesmith = require('gulp.spritesmith'),
    sourcemaps = require('gulp-sourcemaps');


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dev"
        }
    });
});

//scss
gulp.task('sass', function () {
 gulp.src(paths.scss.location)
 .pipe(sourcemaps.init())
 .pipe(concat('main.scss'))
 .pipe(sass().on('error', sass.logError))
 .pipe(sourcemaps.write())
 .pipe(gulp.dest('dev/css'));
 });


//jade
gulp.task('jade', function () {

  gulp.src('dev/jade/index.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('dev'))
});


gulp.task('concat', function () {
  return gulp.src(paths.js.location)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dev/js'));
});


gulp.task('sprite', function() {
  var spriteData = gulp.src('dev/img/icons/*.png')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      imgPath: '../img/sprite.png',
      cssName: 'sprite.scss'
    }));
  spriteData.img.pipe(gulp.dest('dev/img'));
  spriteData.css.pipe(gulp.dest('dev/scss'))
});


var paths = {
  scss: {
    location: [
      'bower_components/normalize-scss/_normalize.scss',
      'dev/scss/main.scss'
    ]
  },
  js: {
    location: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/jquery.columnizer/src/jquery.js',
      'bower_components/jquery.columnizer/src/jquery.columnizer.js',
      'bower_components/jquery.columnizer/src/jquery.js',
      'dev/js/main.js'
    ],
    destination: 'dev/js'
  }

};

gulp.task('watch', function () {

  gulp.watch('dev/jade/**/*.jade', ['jade']);
  gulp.watch('dev/scss/**/*.scss', ['sass']);
  gulp.watch('dev/js/**/*.js', ['concat']);
  gulp.watch([
    'dev/*.html',
    'dev/css/**/*.css',
    'dev/js/**/*.js'
  ]).on("change", browserSync.reload);
});

gulp.task('default', [
  'jade',
  'sass',
  'browser-sync',
  'sprite',
  'concat',
  'watch'

]);