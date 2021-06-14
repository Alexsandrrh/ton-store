const gulp = require("gulp");
const del = require("del");
const pug = require("gulp-pug");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const imagemin = require("gulp-imagemin");
const babel = require("gulp-babel");
const terser = require("gulp-terser");

const config = {
  output: "./build",

  pug: {},
};

// Gulp Tasks
gulp.task("clean", () => {
  return del(config.output);
});

gulp.task("pug", () => {
  return gulp.src("./src/pages/*.pug").pipe(pug()).pipe(gulp.dest("./build"));
});

gulp.task("styles", () => {
  return gulp
    .src("./src/assets/styles/main.scss")
    .pipe(autoprefixer())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest("./build/assets/styles/"));
});

gulp.task("scripts", () => {
  return gulp
    .src("./src/assets/scripts/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(terser())
    .pipe(gulp.dest("./build/assets/scripts/"));
});

gulp.task("images", () => {
  return gulp
    .src("./src/assets/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/assets/images"));
});

gulp.task("fonts", () => {
  return gulp
    .src("./src/assets/fonts/*")
    .pipe(gulp.dest("./build/assets/fonts/"));
});

gulp.task("watch", () => {});

gulp.task(
  "build",
  gulp.series("clean", "pug", "styles", "scripts", "images", "fonts")
);
