const gulp = require('gulp');
const sass = require('gulp-sass');
const clean = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('sass', done => {
    gulp.src("sass/app.sass")
        .pipe(sass())
        .pipe(rename({
            suffix: '.min',
        }))
        .pipe(clean())
        .pipe(gulp.dest('./css'));
    done();
});

gulp.task('watch', () => {
    gulp.watch('sass/**/*.sass', gulp.task('sass'));
});