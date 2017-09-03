/* eslint-env node */
const webpackConfig = require('./webpack.config');
webpackConfig.entry = null; // bug in karma-webpack? -> see https://github.com/webpack-contrib/karma-webpack/issues/231
webpackConfig.plugins = []; // karma-webpack not compatible with CommonChunksPlugin
webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
    config.set({

        basePath: '',

        frameworks: ['mocha'],

        files: [
            'src/js/**/*.test.js',
            'src/test-fixture/**/*.html'
        ],

        exclude: [],

        preprocessors: {
            'src/js/**/*.test.js': ['webpack', 'sourcemap'],
            'src/test-fixture/**/*.html': ['html2js']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true,
            stats: { chunks: false }
        },

        reporters: ['progress'],
        // reporters: ['progress', 'growl'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        // browsers: ['PhantomJS'],
        browsers: ['ChromeHeadless'],
        // browsers: ['Chrome'],
        // browsers: ['Safari'],
        // browsers: ['Chrome', 'Firefox', 'Safari'],

        singleRun: true,

        concurrency: Infinity
    });
};
