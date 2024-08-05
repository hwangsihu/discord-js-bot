// Dummy logging calls (ie, if tests are run in IE)
window.console = window.console || {};
window.console.log = window.console.log || (() => {});
window.console.debug = window.console.debug || (() => {});
window.console.info = window.console.info || (() => {});
window.console.warn = window.console.warn || (() => {});
window.console.error = window.console.error || (() => {});

(() => {
  var modName, testName;

  //arg: { name }
  QUnit.testStart = (t) => {
    modName = t.module;
    testName = t.name;
  };

  //arg: { name, failed, passed, total }
  QUnit.testDone = (t) => {
    if (t.failed)
      console.log(
        'Test "' +
          t.module +
          ": " +
          t.name +
          '" completed: ' +
          (0 === t.failed ? "pass" : "FAIL") +
          "\n"
      );
  };

  //{ result, actual, expected, message }
  QUnit.log = (t) => {
    if (!t.result)
      console.log(
        'Test "' +
          modName +
          ": " +
          testName +
          '" assertion failed. Expected <' +
          t.expected +
          "> Actual <" +
          t.actual +
          ">" +
          (t.message ? ": '" + t.message + "'" : "")
      );
  };
})();
