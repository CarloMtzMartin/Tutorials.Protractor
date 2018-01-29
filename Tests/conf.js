exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumServerJar: '../selenium-server-standalone-3.8.1.jar',
  specs: ['todo-spec.js'],
  framework: 'jasmine',
  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.NUnitXmlReporter({
        consolidateAll: true,
        savePath: 'C:\\Source\\GIT\\Tutorials.Protractor\\testResults',
        
    }));
  }
};
