// Restore the require/define
var require = $.fn.select2.amd.require;
var define = $.fn.select2.amd.define;

// Disable jQuery's binding to $
jQuery.noConflict();

var Utils = require("select2/utils");

function MockContainer() {
  MockContainer.__super__.constructor.call(this);
}

Utils.Extend(MockContainer, Utils.Observable);

MockContainer.prototype.isOpen = function () {
  return this.isOpen;
};

var log = [];
var testName;

QUnit.done((testResults) => {
  var tests = [];
  for (var i = 0, len = log.length; i < len; i++) {
    var details = log[i];
    tests.push({
      name: details.name,
      result: details.result,
      expected: details.expected,
      actual: details.actual,
      source: details.source,
    });
  }
  testResults.tests = tests;

  window.global_test_results = testResults;
});
QUnit.testStart((testDetails) => {
  QUnit.log((details) => {
    if (!details.result) {
      details.name = testDetails.name;
      log.push(details);
    }
  });
});
