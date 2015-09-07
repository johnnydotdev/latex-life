var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("default", shell.task([
    "pdflatex problem_1.tex"
]));

gulp.watch("*.tex", ["default"]);
