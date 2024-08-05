module("Data adapters - Base");

var BaseData = require("select2/data/base");
var $ = require("jquery");
var Options = require("select2/options");

var options = new Options({});

test("current is required", (assert) => {
  var data = new BaseData($("#qunit-fixture select"), options);

  assert.throws(() => {
    data.current(() => {});
  }, "current has no default implementation");
});

test("query is required", (assert) => {
  var data = new BaseData($("#qunit-fixture select"), options);

  assert.throws(() => {
    data.query({}, () => {});
  }, "query has no default implementation");
});
