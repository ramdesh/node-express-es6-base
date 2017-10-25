var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var pump = require('pump');

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