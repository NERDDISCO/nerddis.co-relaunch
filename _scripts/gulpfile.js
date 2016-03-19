//All dependencies loaded
var pathModules     = "/Users/Hornebom/node_modules/";
var Promise         = require( pathModules + 'es6-promise').Promise;
var gulp            = require( pathModules + 'gulp');
var del             = require( pathModules + 'del');
var concat          = require( pathModules + 'gulp-concat');
var uglify          = require( pathModules + 'gulp-uglify');
var rename          = require( pathModules + 'gulp-rename');
var plumber         = require( pathModules + 'gulp-plumber');
var sourcemaps      = require( pathModules + 'gulp-sourcemaps');
var autoprefixer    = require( pathModules + 'gulp-autoprefixer');
var sass            = require( pathModules + 'gulp-sass');
try {
    var browserSync = require( pathModules + 'browser-sync').create();
    var reload = browserSync.reload;
} catch (e) {
    //Do Nothing
}

//Folder paths
var publicPath    = '../public/';
var bowerPath     = publicPath + 'bower/';
var jsBuildPath   = publicPath + 'js/build';
var scssBuildPath = publicPath + 'scss';
var cssBuildPath  = publicPath + 'css';

//Javascript files list
var javascriptFiles = [
    bowerPath + 'jquery/dist/jquery.js',
    publicPath + 'js/main.js'
];

//SCSS Files list
var scssFiles = [
    publicPath + 'scss/**/*.scss'
];

// Browser to be supported by AutoPrefixer
var browserList = ['last 2 versions', 'safari 5', 'ie 9'];

/**
 * Clean the build folders, as preparation for next build
 */
gulp.task('clean', function ()
{
    del([
        jsBuildPath + '/**',
        cssBuildPath + '/**'
    ], {force: true});
});

/**
 * Build for production, without sourcemaps and uglified
 * Runs clean before running this
 */
gulp.task('build-js-production', function ()
{
    return gulp.src(javascriptFiles)
        .pipe(uglify())
        .pipe(concat('final.min.js'))
        .pipe(gulp.dest(jsBuildPath));
});

/**
 * Build for JS development, with sourcemaps and without uglify
 */
gulp.task('build-js-development', function ()
{
    return gulp.src(javascriptFiles)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('final.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(jsBuildPath));
});

/**
 * Build for production sass to css. Compressed & without comments
 */
gulp.task('build-css-production', function ()
{
    return gulp.src(scssBuildPath + '/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer(browserList))
        .pipe(gulp.dest(cssBuildPath))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(cssBuildPath))
});

/**
 * Build for development sass to css. Nested & with comments
 */
gulp.task('build-css-development', function ()
{
    return gulp.src(scssBuildPath + '/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'nested',
            sourceComments: true
        }).on('error', sass.logError))
        .pipe(autoprefixer(browserList))
        .pipe(gulp.dest(cssBuildPath))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(cssBuildPath))
});

/**
 * Shorthand for production build task
 */
gulp.task('build', ['clean', 'build-js-production', 'build-css-production']);

/**
 * Default watcher for development. Cleans build folder before and does a build before starting watching
 */
gulp.task('default', ['clean'], function ()
{
    gulp.start('build-js-development');
    gulp.start('build-css-development');

    gulp.watch(javascriptFiles, ['build-js-development']);
    gulp.watch(scssFiles, ['build-css-development']);
});

/**
 * Task for browsersync: Serve website and reload on changes
 */
gulp.task('serve', function ()
{
  browserSync.init({
      server: {
          baseDir: "../"
      }
  });

    gulp.watch("../*.html").on('change', reload);
    gulp.watch(publicPath + "/css/*.css").on('change', reload);
    gulp.watch(publicPath + "/js/**/*.js").on('change', reload);
});
