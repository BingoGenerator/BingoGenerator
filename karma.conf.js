// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-firefox-launcher'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            jasmine: {
                random: false
            },
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        customLaunchers: {
            'FirefoxHeadless': {
                base: 'Firefox',
                flags: [
                    '-headless'
                ]
            }
        },
        coverageReporter: {
            dir: require('path').join(__dirname, './coverage/bingo-generator'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true,
            thresholds: {
                statements: 70,
                lines: 70,
                functions: 70
            }
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.ERROR,
        autoWatch: true,
        browsers: ['FirefoxHeadless', 'ChromeHeadless'],
        singleRun: true,
        restartOnFileChange: true
    });
};