var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var gls = require('gulp-live-server');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

// Confingure our directories
var paths = {
  js:     'public/js',
  css:    'public/css',
  styles: 'lib',
  html:   'lib',
  img:    'public/img',
};

gulp.task('default', ['css', 'html', 'mainjs','maincss']);

gulp.task('css', function () {
  gulp.src(paths.styles + '/main.styl')
      .pipe(stylus({compress: true, paths: [paths.styles]}))
      .pipe(autoprefixer())
      .pipe(minifyCSS())
      .pipe(rename('style.css'))
      .pipe(gulp.dest(paths.css))
});

gulp.task('html', function() {
  var YOUR_LOCALS = {};
  gulp.src('./lib/profile/*.jade')
      .pipe(jade({pretty: false}))
      .pipe(gulp.dest('./public/'))
});

gulp.task('mainjs', function() {
  gulp.src([
    paths.js + '/vendor/jquery-1.12.0.min.js',
    paths.js + '/vendor/modernizr-2.8.3.min.js'
  ])
      .pipe( concat('main.js') )
      .pipe(uglify())
      .pipe(gulp.dest(paths.js))
});

gulp.task('maincss', function() {
  gulp.src([
    paths.css + '/normalize.css',
    paths.css + '/style.css'
  ])
      .pipe( concat('main.css') )
      .pipe(gulp.dest(paths.css))
});

gulp.task('img', function() {
  gulp.src('public/img/*')
  	.pipe(imagemin({
  			progressive: true,
  			svgoPlugins: [{removeViewBox: false}],
  			use: [pngquant()]
  		}))
    .pipe(gulp.dest('public/imgdist'));
});

gulp.task('serve', function() {
  var server = gls.static('public', 8000);
  server.start();
  gulp.watch(['public/**/*.css', 'public/**/*.html'], function (file) {
  server.notify.apply(server, [file]);
  });
  gulp.watch(paths.styles + '/**/*.styl', ['css','maincss']);
  gulp.watch(paths.html + '/**/*.jade', ['html']);
});

var file = 'normalize.css';
var oriPathFile = 'public/css/';
var destPathFile = 'public/css/';
gulp.task('comprimir', function() {
  gulp.src(oriPathFile + file)
      .pipe(minifyCSS())
      .pipe(rename(file))
      .pipe(gulp.dest(destPathFile + file))
});
