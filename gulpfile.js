const {src, dest, parallel} = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

function css() {
    return src('src/sass/pep.scss')
        .pipe(sass())
        .pipe(dest('dist/css'))
}

function js() {
    return src([
        'src/js/plugins/jquery-3.1.1.min.js',
        'src/js/plugins/popper.min.js',
        'src/js/plugins/bootstrap.js',
        'src/js/plugins/bootstrap3-typeahead.js',
        'src/js/plugins/clipboard.js',
        'src/js/plugins/echarts.js',
        'src/js/plugins/jquery.row-grid.js',
        'src/js/plugins/owl.carousel.min.js',
        'src/js/components/menu.js'
        ], {sourcemaps: true})
        .pipe(concat('pep.min.js'))
        .pipe(dest('dist/js', {sourcemaps: true}))
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);