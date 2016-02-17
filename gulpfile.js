var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    concat       = require("gulp-concat"),
    watch        = require("gulp-watch"),
    plumber      = require("gulp-plumber"),
    minify_css   = require("gulp-minify-css"),
    uglify       = require("gulp-uglify"),
    autoprefixer = require("autoprefixer");

// --------------------------------------------------------------------

var dest_js  = "dist/js";
var dest_css = "dist/css";
var src_sass = "src/sass";
var src_js   = "src/js";

// --------------------------------------------------------------------

// SASS to CSS
gulp.task('sass', function() {
    gulp.src(src_sass)
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(dest_css))
        .pipe(minify_css())
        .pipe(gulp.dest(dest_css))
    
});