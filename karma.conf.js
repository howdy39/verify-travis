
module.exports = function (config) {

  config.set({

    basePath: '',
    browsers: ['Chrome'],
    frameworks: ['mocha'],
    files: [
      {pattern: 'test/**/*.spec.js', watched: false},
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*.spec.js': ['webpack'],
    },
    webpack: {
      devtool: 'none'
    },
    webpackMiddleware: {
      noInfo: true
    },
    logLevel: config.LOG_INFO
  });
};
