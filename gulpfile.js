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
  output: "./dist",

  pug: {},
};

// Gulp Tasks
gulp.task("clean", () => {
  return del(config.output);
});

gulp.task("pug", () => {
  return gulp.src("./src/pages/*.pug").pipe(pug()).pipe(gulp.dest("./dist"));
});

gulp.task("styles", () => {
  return gulp
    .src("./src/assets/styles/main.scss")
    .pipe(autoprefixer())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest("./dist/assets/styles/"));
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
    .pipe(gulp.dest("./dist/assets/scripts/"));
});

gulp.task("images", () => {
  return gulp
    .src("./src/assets/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task("fonts", () => {
  return gulp
    .src("./src/assets/fonts/*")
    .pipe(gulp.dest("./dist/assets/fonts/"));
});

gulp.task("watch", () => {});

gulp.task(
  "build",
  gulp.series("clean", "pug", "styles", "scripts", "images", "fonts")
);
