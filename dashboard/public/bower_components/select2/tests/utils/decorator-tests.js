module("Decorators");

var Utils = require("select2/utils");

test("overridden - method", (assert) => {
  function BaseClass() {}

  BaseClass.prototype.hello = () => "A";

  function DecoratorClass() {}

  DecoratorClass.prototype.hello = () => "B";

  var DecoratedClass = Utils.Decorate(BaseClass, DecoratorClass);

  var inst = new DecoratedClass();

  assert.strictEqual(inst.hello(), "B");
});

test("overridden - constructor", (assert) => {
  function BaseClass() {
    this.inherited = true;
  }

  BaseClass.prototype.hello = () => "A";

  function DecoratorClass(decorated) {
    this.called = true;
  }

  DecoratorClass.prototype.other = () => "B";

  var DecoratedClass = Utils.Decorate(BaseClass, DecoratorClass);

  var inst = new DecoratedClass();

  assert.ok(inst.called);
  assert.ok(!inst.inherited);
});

test("not overridden - method", (assert) => {
  function BaseClass() {}

  BaseClass.prototype.hello = () => "A";

  function DecoratorClass() {}

  DecoratorClass.prototype.other = () => "B";

  var DecoratedClass = Utils.Decorate(BaseClass, DecoratorClass);

  var inst = new DecoratedClass();

  assert.strictEqual(inst.hello(), "A");
});

test("not overridden - constructor", (assert) => {
  function BaseClass() {
    this.called = true;
  }

  BaseClass.prototype.hello = () => "A";

  function DecoratorClass() {}

  DecoratorClass.prototype.other = () => "B";

  var DecoratedClass = Utils.Decorate(BaseClass, DecoratorClass);

  var inst = new DecoratedClass();

  assert.ok(inst.called);
});

test("inherited - method", (assert) => {
  function BaseClass() {}

  BaseClass.prototype.hello = () => "A";

  function DecoratorClass(decorated) {}

  DecoratorClass.prototype.hello = function (decorated) {
    return "B" + decorated.call(this) + "C";
  };

  var DecoratedClass = Utils.Decorate(BaseClass, DecoratorClass);

  var inst = new DecoratedClass();

  assert.strictEqual(inst.hello(), "BAC");
});

test("inherited - constructor", (assert) => {
  function BaseClass() {
    this.inherited = true;
  }

  BaseClass.prototype.hello = () => "A";

  function DecoratorClass(decorated) {
    this.called = true;

    decorated.call(this);
  }

  DecoratorClass.prototype.other = () => "B";

  var DecoratedClass = Utils.Decorate(BaseClass, DecoratorClass);

  var inst = new DecoratedClass();

  assert.ok(inst.called);
  assert.ok(inst.inherited);
});

test("inherited - three levels", (assert) => {
  function BaseClass(testArgument) {
    this.baseCalled = true;
    this.baseTestArgument = testArgument;
  }

  BaseClass.prototype.test = (a) => a + "c";

  function MiddleClass(decorated, testArgument) {
    this.middleCalled = true;
    this.middleTestArgument = testArgument;

    decorated.call(this, testArgument);
  }

  MiddleClass.prototype.test = function (decorated, a) {
    return decorated.call(this, a + "b");
  };

  function DecoratorClass(decorated, testArgument) {
    this.decoratorCalled = true;
    this.decoratorTestArgument = testArgument;

    decorated.call(this, testArgument);
  }

  DecoratorClass.prototype.test = function (decorated, a) {
    return decorated.call(this, a + "a");
  };

  var DecoratedClass = Utils.Decorate(Utils.Decorate(BaseClass, MiddleClass), DecoratorClass);

  var inst = new DecoratedClass("test");

  assert.ok(inst.baseCalled, "The base class contructor was called");
  assert.ok(inst.middleCalled, "The middle class constructor was called");
  assert.ok(inst.decoratorCalled, "The decorator constructor was called");

  assert.strictEqual(inst.baseTestArgument, "test");
  assert.strictEqual(inst.middleTestArgument, "test");
  assert.strictEqual(inst.decoratorTestArgument, "test");

  var out = inst.test("test");

  assert.strictEqual(out, "testabc");
});
