/* eslint-env node */
var jasmineReporters = require('jasmine-reporters');

exports.config = {
	framework: 'jasmine2',
	//seleniumServerJar: '../../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',

	seleniumAddress: 'http://localhost:4444/wd/hub',

	capabilities: {
		'browserName': 'chrome'
		// 'browserName': 'firefox'
		//'browserName': 'phantomjs'
		//'browserName': 'internet explorer'
	},

	baseUrl: 'http://localhost:5678',

	//multiCapabilities: [{
	//	'browserName': 'firefox'
	//}, {
	//	'browserName': 'chrome'
	//}],

	specs: ['*Spec.js'],

	onPrepare: function() {
		jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            savePath: '.',
            consolidateAll: false
        }));
	}

};
