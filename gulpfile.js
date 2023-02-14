import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import  browserSync from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import svgSprite from 'gulp-svg-sprite';
import webpack from 'webpack-stream';
// import {config} from 'webpack.config.cjs';

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/**/*.html").on('change', browserSync.reload);
    gulp.watch("src/js/**/*.js").on('change', browserSync.reload); /**/
});

gulp.task('styles', function() {
    return gulp.src("src/sass/style.+(scss|sass)")
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    // gulp.watch("src/js/**/*.js").on('change', gulp.parallel('scripts')); /**/
})

gulp.task('html', function() {
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function() {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"));
});

gulp.task('fonts', function() {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task('icons', function() {
    return gulp.src("src/icons/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/icons"));
});

gulp.task('images', function() {
    return gulp.src("src/images/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/images"));
});

gulp.task('sprites', function () {
    return gulp.src("src/**/*.svg")
      .pipe(svgSprite({
        mode: {
          symbol: {
            sprite: '../sprites.svg',
          },
        },
      }))
      .pipe(gulp.dest("dist/sprites"))
});

gulp.task('webpack', function () {
    return gulp
      .src('src/js/script.js')
      .pipe(
        webpack({
            output: {
                filename: 'bundle.js'
            },
            mode: 'development',
            watch: true,
            module: {
                rules:[
                    { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
                ]
            }
        })
      )
      .pipe(gulp.dest("dist/js"));
  });
  

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'fonts', 'scripts', 'icons', 'images', 'sprites', 'webpack'));