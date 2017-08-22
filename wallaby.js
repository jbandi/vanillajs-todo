/* eslint-env node */
const wallabyWebpack = require('wallaby-webpack');
const wallabyPostprocessor = wallabyWebpack({});

module.exports = function (wallaby) {
    return {

        files: [
            {pattern: 'src/js/**/*.js', load: false},
            {pattern: 'src/js/**/*.test.js', ignore: true}
        ],

        tests: [
            {pattern: 'src/js/**/*.test.js', load: false},
        ],
        compilers: {
            'src/js/**/*.js': wallaby.compilers.babel()
        },
        postprocessor: wallabyPostprocessor,

        setup: function () {
            window.__moduleBundler.loadTests();
        },

        delays: {
            run: 200
        }
    };
};
