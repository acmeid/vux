
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var pxtorem = require('postcss-pxtorem');
var autoprefixer = require('autoprefixer');

var option = {base: 'src'};
var dist = __dirname + '/';

var processors = [
    autoprefixer({
        browsers: 'last 1 version'
    }),
    pxtorem({
        rootValue: 20,
        unitPrecision: 5,
        propWhiteList: [],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
    })
];

gulp.task('pxtorem', function (){
    gulp.src('vux.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest(dist));
});

