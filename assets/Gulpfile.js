var gulp = require('gulp');

// Include Plugins
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var gutil = require('gulp-util');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant'); // $ npm i -D imagemin-pngquant

// Compile Sass; note sass options to prevent server from breaking when you fudge a css rule
gulp.task('sass', function() {
    return gulp.src('scss/style.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed',
            errToConsole: true
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('../static/assets/css/'))
        .pipe(rename('style-embed-for-crp-only.html'))
        .pipe(gulp.dest('../layouts/partials/site_header/'));
});
//separate fonts.min.css for content modeling presentation sample
gulp.task('fonts', function() {
    return gulp.src('scss/fonts.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed',
            errToConsole: true
        }))
        .pipe(rename('fonts.min.css'))
        .pipe(gulp.dest('../static/presentationsample3/index_files/'))
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/modules/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('../static/assets/js'));
});

// gulp.task('scripts2', function() {
//     return gulp.src('js/kudos/*.js')
//         .pipe(concat('kudos-all.js'))
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         .pipe(uglify())
//         .pipe(rename('kudosall.min.js'))
//         .pipe(gulp.dest('../static/assets/js'));
// });

gulp.task('images', () => {
    return gulp.src('../static/assets/images/*')
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('../static/assets/images/'));
});

//the default "compile" task for sass and js
gulp.task('compile', ['sass', 'scripts'], function() {
    gulp.watch(['scss/*.scss', 'scss/modules/*scss'], ['sass']);
    gulp.watch("scss/partials/*.scss", ['sass']);
    gulp.watch("scss/fonts.scss", ['fonts']);
    gulp.watch("js/modules/*.js", ['scripts']);
    // gulp.watch("js/kudos/*.js", ['scripts2']);
});

// Default Task
gulp.task('default', ['compile']);

// Image optimization
gulp.task('img', ['images']);
