'use strict';

import gulp from 'gulp';
import { env } from 'gulp-util';
import runSequence from 'run-sequence';
import livereload from 'gulp-livereload';
import './tasks/static';
import './tasks/static-root';
import './tasks/images';
import './tasks/css';
import './tasks/js';
import './tasks/server';

process.env.NODE_ENV = env.production ? 'production' : 'development';

gulp.task('default', ['static', 'static-root', 'images', 'css', 'js']);
gulp.task('serve', (cb) => {
    runSequence('default', 'server', () => {
        cb();
        livereload.listen();
    });
});
