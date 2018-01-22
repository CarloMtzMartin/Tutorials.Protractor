exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],
  framework: 'jasmine2',
  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.NUnitXmlReporter({
        consolidateAll: true,
        savePath: 'C:\\Source\\GIT\\Tutorials.Protractor\\testResults'
    }));
  }
};