
module.exports = function (config) {

  config.set({

    basePath: '',
    browsers: [process.env.TRAVIS ? 'Chrome_travis_ci' : 'Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
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
