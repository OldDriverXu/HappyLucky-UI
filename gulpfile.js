var gulp = require('gulp');
var gulpif = require('gulp-if');
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

// Add custom prefix class in css file
gulp.task('customPrefix', function() {
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
    .pipe(size({title: 'styles'}));
});

// Copy to docs directory
gulp.task('copy', function() {
  return gulp.src([
    './css/*.css',
    './fonts/**'])
  .pipe(gulpif('*.css', gulp.dest('./example/docs/css')))
  .pipe(gulpif(['*.eot', '*.svg', '*.ttf', '*.woff'], gulp.dest('./example/docs/fonts')))
  .pipe(size({title: 'copy'}));
});

// Watch
gulp.task('serve', function() {
  gulp.watch("./scss/*.scss", function() {
    if (ENABLE_PREFIX) {
      runSequence('sass','customPrefix', 'styles', 'copy');
    } else {
      runSequence('sass', 'styles', 'copy');
    }
  });
});

gulp.task('default', ['build']);

gulp.task('build', function() {
  if (ENABLE_PREFIX) {
    runSequence('sass', 'customPrefix', 'styles', 'copy');
  } else {
    runSequence('sass', 'styles', 'copy');
  }
});

gulp.task('dev', function() {
  if (ENABLE_PREFIX) {
    runSequence('sass', 'customPrefix', 'copy');
  } else {
    runSequence('sass', 'copy');
  }
});
