var gulp = require('gulp');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var cssClassPrefix = require('gulp-css-class-prefix');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var size = require('gulp-size');
var runSequence = require('run-sequence');

var AUTOPREFIXER_BROWSERS = [
  // 'ie >= 10',
  'ie_mob >= 10',
  // 'ff >= 30',
  'chrome >= 34',
  // 'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 2.3'
  // 'bb >= 10'
];

var ENABLE_PREFIX  = true;
var PREFIX = 'hl-';

// Compile Sass into CSS
gulp.task('sass', function() {
  return gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

// Prefix class in css file
gulp.task('prefix', function() {
  return gulp.src('./css/*.css')
    .pipe(cssClassPrefix(PREFIX))
    .pipe(gulp.dest('./css'));
});

// Uglify CSS
gulp.task('styles', function() {
  return gulp.src('./css/*.css')
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('./css'))
    // Concatenate and Minify Styles
    .pipe(gulpif('*.css', csso(true)))
    .pipe(gulp.dest('./css'))
    .pipe(gulp.dest('./example/docs/css'))
    .pipe(size({title: 'styles'}));
});

// Static server
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    //browser: "chromium-browser",
    port: 8888,
    reloadDelay: 2000     // Wait for 2 seconds before any browsers should try to inject/reload a file.
  });

  gulp.watch("./scss/*.scss", ['sass']);
  if (ENABLE_PREFIX) {
    gulp.watch("./css/*.css", ['prefix']);
  }
  gulp.watch("./example/*.html").on('change', browserSync.reload);

});

gulp.task('default', ['serve']);

gulp.task('build', function() {
  if (ENABLE_PREFIX) {
    runSequence('sass', 'prefix', 'styles');
  } else {
    runSequence('sass', 'styles');
  }
});

gulp.task('dev', function() {
  if (ENABLE_PREFIX) {
    runSequence('sass', 'prefix');
  } else {
    runSequence('sass');
  }
});
