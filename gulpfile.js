let gulp = require("gulp");
let babel = require("gulp-babel");
let concat = require("gulp-concat");
let pump = require('pump');

gulp.task("babel-prod", function () {
    return gulp.src(['src/**/*.js', '!src/scripts/*'])
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task("default", function (dist) {
    return gulp.src(['src/**/*.js', '!src/scripts/*'])
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});