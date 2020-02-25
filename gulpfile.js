var NwBuilder = require('nw-builder');
var gulp = require('gulp');
var log = require('fancy-log');
var rename = require('gulp-rename');

function createNW(){
    var nw = new NwBuilder({
        version: '0.14.6',
        files: './build/**',
        platforms: ['win32', 'win64', 'linux64'],
		buildDir: './build_desktop/',
    });
    // Log stuff you want
    nw.on('log', function (msg) {
        log('nw-builder', msg);
    });
    // Build returns a promise, return it so the task isn't called in parallel
    return nw.build().catch(function (err) {
        log('nw-builder', err);
    });
};
//series
gulp.task('default', gulp.series( createNW) );