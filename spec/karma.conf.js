// Karma configuration
// Generated on Wed Nov 13 2019 14:10:47 GMT+0000 (Greenwich Mean Time)
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: ['helpers/enzyme.js',
      {
        pattern: '../src/components/**/*.test.js',
        watched: false
      },
    ],


    // list of files / patterns to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'helpers/enzyme.js': ['webpack'],
      '../src/components/**/*.test.js': ['webpack']
    },

    webpack: {
      mode: 'development',
      module: {
        rules: [{
            test: /\.(css|png|svg|jpg)$/,
            exclude: /node_modules/,
            use: {
              loader: 'ignore-loader'
            }
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ["@babel/preset-react"]
              }
            }
          }
        ]
      },

      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies
      // webpack configuration
    },
    webpackMiddleware: {
      // Any custom webpack-dev-middleware configuration...
      stats: 'errors-only',
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
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
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}