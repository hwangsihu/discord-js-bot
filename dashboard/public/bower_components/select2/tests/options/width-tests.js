module("Options - Width");

var $ = require("jquery");

var Select2 = require("select2/core");
var select = new Select2($("<select></select>"));

test("string passed as width", (assert) => {
  var $test = $("<select></select>");

  var width = select._resolveWidth($test, "80%");

  assert.equal(width, "80%");
});

test("width from style attribute", (assert) => {
  var $test = $('<select style="width: 50%;"></selct>');

  var width = select._resolveWidth($test, "style");

  assert.equal(width, "50%");
});

test("width from style returns null if nothing is found", (assert) => {
  var $test = $("<select></selct>");

  var width = select._resolveWidth($test, "style");

  assert.equal(width, null);
});

test("width from computed element width", (assert) => {
  var $style = $('<style type="text/css">.css-set-width { width: 500px; }</style>');
  var $test = $('<select class="css-set-width"></select>');

  $("#qunit-fixture").append($style);
  $("#qunit-fixture").append($test);

  var width = select._resolveWidth($test, "element");

  assert.equal(width, "500px");
});

test("resolve gets the style if it is there", (assert) => {
  var $test = $('<select style="width: 20%;"></selct>');

  var width = select._resolveWidth($test, "resolve");

  assert.equal(width, "20%");
});

test("resolve falls back to element if there is no style", (assert) => {
  var $style = $('<style type="text/css">.css-set-width { width: 500px; }</style>');
  var $test = $('<select class="css-set-width"></select>');

  $("#qunit-fixture").append($style);
  $("#qunit-fixture").append($test);

  var width = select._resolveWidth($test, "resolve");

  assert.equal(width, "500px");
});
