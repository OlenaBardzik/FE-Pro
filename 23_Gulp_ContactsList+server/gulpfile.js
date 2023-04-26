const {src, dest, series, parallel, watch} = require("gulp");
const concat = require("gulp-concat");
const clean = require("gulp-clean");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const {path} = require("./gulp/const.js");

function serveTask (done) {
    browserSync.init({
        server: {
            baseDir: path.dest
        }
    });

    watch(path.htmlSrc, series(copyHtmlTask, reloadBrowser));
    watch(path.jsSrc, series(copyJsTask, reloadBrowser));
    watch(path.cssSrc, series(copyCssTask, reloadBrowser));

    done();
}

function reloadBrowser (done) {
    browserSync.reload();
    done();
}

function buildTask () {
    return series(cleanDistTask, parallel(copyHtmlTask, copyJsTask, copyCssTask));
}

function copyHtmlTask () {
    return src(path.htmlSrc)
        .pipe(dest(path.dest))
}

function copyJsTask () {
    return src(path.allJsSrc)
        .pipe(concat(path.destJs))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(dest(path.dest))
}

function copyCssTask () {
    return src(path.cssSrc)
        .pipe(concat(path.destCss))
        .pipe(dest(path.dest))
}

function cleanDistTask () {
    return src(path.dest, {read: false, allowEmpty: true})
    .pipe(clean());
}

exports.build = buildTask();
exports.serve = series(buildTask(), serveTask);