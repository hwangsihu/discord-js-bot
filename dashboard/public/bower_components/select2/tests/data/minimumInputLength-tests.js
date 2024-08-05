module("Data adapters - Minimum input length");

var MinimumInputLength = require("select2/data/minimumInputLength");
var $ = require("jquery");
var Options = require("select2/options");
var Utils = require("select2/utils");

function StubData() {
  this.called = false;
}

StubData.prototype.query = function (params, callback) {
  this.called = true;
};

var MinimumData = Utils.Decorate(StubData, MinimumInputLength);

test("0 never displays the notice", (assert) => {
  var zeroOptions = new Options({
    minimumInputLength: 0,
  });

  var data = new MinimumData(null, zeroOptions);

  data.trigger = () => {
    assert.ok(false, "No events should be triggered");
  };

  data.query({
    term: "",
  });

  assert.ok(data.called);

  data = new MinimumData(null, zeroOptions);

  data.query({
    term: "test",
  });

  assert.ok(data.called);
});

test("< 0 never displays the notice", (assert) => {
  var negativeOptions = new Options({
    minimumInputLength: -1,
  });

  var data = new MinimumData(null, negativeOptions);

  data.trigger = () => {
    assert.ok(false, "No events should be triggered");
  };

  data.query({
    term: "",
  });

  assert.ok(data.called);

  data = new MinimumData(null, negativeOptions);

  data.query({
    term: "test",
  });

  assert.ok(data.called);
});

test("triggers when input is not long enough", (assert) => {
  var options = new Options({
    minimumInputLength: 10,
  });

  var data = new MinimumData(null, options);

  data.trigger = () => {
    assert.ok(true, "The event should be triggered.");
  };

  data.query({
    term: "no",
  });

  assert.ok(!data.called);
});

test("does not trigger when equal", (assert) => {
  var options = new Options({
    minimumInputLength: 10,
  });

  var data = new MinimumData(null, options);

  data.trigger = () => {
    assert.ok(false, "The event should not be triggered.");
  };

  data.query({
    term: "1234567890",
  });

  assert.ok(data.called);
});

test("does not trigger when greater", (assert) => {
  var options = new Options({
    minimumInputLength: 10,
  });

  var data = new MinimumData(null, options);

  data.trigger = () => {
    assert.ok(false, "The event should not be triggered.");
  };

  data.query({
    term: "12345678901",
  });

  assert.ok(data.called);
});

test("works with null term", (assert) => {
  var options = new Options({
    minimumInputLength: 1,
  });

  var data = new MinimumData(null, options);

  data.trigger = () => {
    assert.ok(true, "The event should be triggered");
  };

  data.query({});

  assert.ok(!data.called);
});
