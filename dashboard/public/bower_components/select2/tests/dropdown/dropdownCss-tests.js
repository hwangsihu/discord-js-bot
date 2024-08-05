module("Dropdown - dropdownCssClass compatibility");

var $ = require("jquery");
var Utils = require("select2/utils");
var Options = require("select2/options");

var Dropdown = require("select2/dropdown");
var dropdownCss = Utils.Decorate(Dropdown, require("select2/compat/dropdownCss"));

test("all classes will be copied if :all: is used", (assert) => {
  var $element = $('<select class="test copy works"></select>');
  var options = new Options({
    dropdownCssClass: ":all:",
  });

  var select = new dropdownCss($element, options);
  var $dropdown = select.render();

  assert.ok($dropdown.hasClass("test"));
  assert.ok($dropdown.hasClass("copy"));
  assert.ok($dropdown.hasClass("works"));
  assert.ok(!$dropdown.hasClass(":all:"));
});

test(":all: can be used with other classes", (assert) => {
  var $element = $('<select class="test copy works"></select>');
  var options = new Options({
    dropdownCssClass: ":all: other",
  });

  var select = new dropdownCss($element, options);
  var $dropdown = select.render();

  assert.ok($dropdown.hasClass("test"));
  assert.ok($dropdown.hasClass("copy"));
  assert.ok($dropdown.hasClass("works"));
  assert.ok($dropdown.hasClass("other"));
  assert.ok(!$dropdown.hasClass(":all:"));
});

test("classes can be passed in as a string", (assert) => {
  var $element = $('<select class="test copy works"></select>');
  var options = new Options({
    dropdownCssClass: "other",
  });

  var select = new dropdownCss($element, options);
  var $dropdown = select.render();

  assert.ok($dropdown.hasClass("other"));
});

test("a function can be used based on the element", (assert) => {
  var $element = $('<select class="test"></select>');
  var options = new Options({
    dropdownCssClass: ($element) => "function",
  });

  var select = new dropdownCss($element, options);
  var $dropdown = select.render();

  assert.ok($dropdown.hasClass("function"));
  assert.ok(!$dropdown.hasClass("test"));
});

test(":all: works around custom adapters", (assert) => {
  var $element = $('<select class="test"></select>');
  var options = new Options({
    dropdownCssClass: ":all: something",
    adaptDropdownCssClass: (clazz) => clazz + "-modified",
  });

  var select = new dropdownCss($element, options);
  var $dropdown = select.render();

  assert.ok($dropdown.hasClass("something"));

  assert.ok($dropdown.hasClass("test"));
  assert.ok($dropdown.hasClass("test-modified"));
});

module("Dropdown - adaptDropdownCss compatibility");

test("only return when adapted", (assert) => {
  var $element = $('<select class="original"></select>');
  var options = new Options({
    adaptDropdownCssClass: (clazz) => "modified",
  });

  var select = new dropdownCss($element, options);
  var $dropdown = select.render();

  assert.ok(!$dropdown.hasClass("original"));
  assert.ok($dropdown.hasClass("modified"));
});
