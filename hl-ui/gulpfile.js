var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var gulp = require('gulp');
var fontName = 'holi';

var runTimestamp = Math.round(Date.now()/1000);

gulp.task('iconfont', function(){
  gulp.src(['svg/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: './templates/_icon-font.scss',
      targetPath: '../_icon-font.scss'
    }))
    .pipe(iconfont({
      fontName: fontName,
      normalize: true,
      fontHeight: 600,
      appendUnicode: true,
      timestamp: runTimestamp
    }))
    .pipe(gulp.dest('./fonts/'));
});
gulp.task('default', ['iconfont']);
