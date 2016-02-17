var gulp        = require("gulp"),
    sass        = require("gulp-sass"),
    concat      = require("gulp-concat"),
    watch       = require("gulp-watch"),
    plumber     = require("gulp-plumber"),
    minify_css  = require("gulp-minify-css"),
    uglify      = require("gulp-uglify"),
    sourcemaps  = require("gulp-sourcemaps"),
    prefix      = require("gulp-autoprefixer"),
    imagemin    = require("gulp-imagemin"),
    pngquant    = require("imagemin-pngquant");

// --------------------------------------------------------------------

var dest_js  = "dist/js";
var dest_css = "dist/css";
var src_sass = "src/sass/**/*.scss";
var src_js   = "src/js/**/*.js";

// --------------------------------------------------------------------

//var onError = function(err) {
//    console.log(err;
//    this.emit('end');
//};

// SASS to CSS
gulp.task('sass', function() {
    
    gulp.src(src_sass)
        .pipe(plumber())
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest(dest_css))
        .pipe(minify_css())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest_css))
    
});

// --------------------------------------------------------------------

// Compile JS

gulp.task('js', function() {
    
    gulp.src(src_js)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest_js));
   
});

// --------------------------------------------------------------------

// Watch

gulp.task('watch', function() {
    
    gulp.watch(src_js, ['js']);
    gulp.watch(src_sass, ['sass']);
    
});