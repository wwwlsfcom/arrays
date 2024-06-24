// Karma configuration
// Generated on Tue May 28 2024 21:41:26 GMT+0800 (中国标准时间)
module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
       frameworks: ['jasmine'],

        client: {
            jasmine: {
                "helpers": [
                    "helpers/**/*.?(m)js"
                ],
            }
        },

        // list of files / patterns to load in the browser
        files: [
            "spec/cesium-env.js",
            "__test__/**/*Spec.js",
            {
                pattern: 'public/cesium/**',
                included: false,
                served: true,
            },
        ],

        // list of files / patterns to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
        preprocessors: {},

        // spec results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser instances should be started simultaneously
        concurrency: Infinity
    })
}
