'use strict';

export default {
    images: {
        src: `src/images/**/*`,
        dest: `dist/res/images`,
        watch: `src/images/**/*`,
        clean: `dist/res/images`
    },
    static: {
        src: `src/static/**/*`,
        dest: `dist/res/static`,
        watch: `src/static/**/*`,
        clean: `dist/res/static`
    },
    staticRoot: {
        src: [`!src/static-root/res/**/*`, `src/static-root/**/*`],
        dest: `dist/`,
        watch: [`!src/static-root/res/**/*`, `src/static-root/**/*`],
        clean: `dist/!(res)`
    },
    js: {
        src: `src/app/index.js`,
        dest: {
            directory: `dist/res`,
            file: 'app.js'
        },
        watch: [`node_modules/**/*.js`, `src/app/**/*.js`],
        clean: `dist/res`,
        browserifyExtensions: ['.js', '.jsx', '.json'],
        babelPresets: ['es2015', 'react']
    },
    css: {
        src: `src/stylesheets/index.scss`,
        dest: {
            directory: `dist/res`,
            file: 'app.css'
        },
        watch: [`node_modules/**/*.(css|scss|sass)`, `src/stylesheets/**/*.scss`],
        clean: `dist/res`,
        sassOptions: {}
    },
    server: {
        host: `0.0.0.0`,
        port: 8080,
        root: 'dist',
        debug: true
    }
};
