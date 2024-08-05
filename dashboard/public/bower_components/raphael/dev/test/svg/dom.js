(() => {
  var paper,
    url = "http://raphaeljs.com";

  module("DOM", {
    setup: () => {
      paper = new Raphael(document.getElementById("qunit-fixture"), 1000, 1000);
    },
    teardown: () => {
      paper.remove();
    },
  });

  var equalNodePosition = (node, expectedParent, expectedPreviousSibling, expectedNextSibling) => {
    equal(node.parentNode, expectedParent);
    equal(node.previousSibling, expectedPreviousSibling);
    equal(node.nextSibling, expectedNextSibling);
  };

  var equalNodePositionWrapped = (
    node,
    anchor,
    expectedParent,
    expectedPreviousSibling,
    expectedNextSibling
  ) => {
    equal(node.parentNode, anchor);
    equalNodePosition(anchor, expectedParent, expectedPreviousSibling, expectedNextSibling);
  };

  // Element#insertBefore
  // --------------------

  test("insertBefore: no element", () => {
    var el = paper.rect();

    el.insertBefore(null);

    equalNodePosition(el.node, paper.canvas, paper.defs, null);
  });

  test("insertBefore: first element", () => {
    var x = paper.rect();
    var el = paper.rect();

    el.insertBefore(x);

    equalNodePosition(el.node, paper.canvas, paper.defs, x.node);
  });

  test("insertBefore: middle element", () => {
    var x = paper.rect();
    var y = paper.rect();
    var el = paper.rect();

    el.insertBefore(y);

    equalNodePosition(el.node, paper.canvas, x.node, y.node);
  });

  test("insertBefore: no element when wrapped in <a>", () => {
    var el = paper.rect().attr("href", url),
      anchor = el.node.parentNode;

    el.insertBefore(null);

    equalNodePositionWrapped(el.node, anchor, paper.canvas, paper.defs, null);
  });

  test("insertBefore: first element when wrapped in <a>", () => {
    var x = paper.rect();
    var el = paper.rect().attr("href", url),
      anchor = el.node.parentNode;

    el.insertBefore(x);

    equalNodePositionWrapped(el.node, anchor, paper.canvas, paper.defs, x.node);
  });

  test("insertBefore: first element wrapped in <a> and wrapped in <a>", () => {
    var x = paper.rect().attr("href", url),
      xAnchor = x.node.parentNode;
    var el = paper.rect().attr("href", url),
      anchor = el.node.parentNode;

    el.insertBefore(x);

    equalNodePositionWrapped(el.node, anchor, paper.canvas, paper.defs, xAnchor);
  });

  test("insertBefore: middle element when wrapped in <a>", () => {
    var x = paper.rect();
    var y = paper.rect();
    var el = paper.rect().attr("href", url),
      anchor = el.node.parentNode;

    el.insertBefore(y);

    equalNodePositionWrapped(el.node, anchor, paper.canvas, x.node, y.node);
  });

  test("insertBefore: middle element wrapped in <a> and wrapped in <a>", () => {
    var x = paper.rect().attr("href", url),
      xAnchor = x.node.parentNode;
    var y = paper.rect().attr("href", url),
      yAnchor = y.node.parentNode;
    var el = paper.rect().attr("href", url),
      anchor = el.node.parentNode;

    el.insertBefore(y);

    equalNodePositionWrapped(el.node, anchor, paper.canvas, xAnchor, yAnchor);
  });

  // TODO...
  // insertBefore: with set
  // insertBefore: with nested set.

  // Element#insertAfter
  // -------------------

  test("insertAfter: no element", () => {
    var el = paper.rect();

    el.insertAfter(null);

    equalNodePosition(el.node, paper.canvas, paper.defs, null);
  });

  test("insertAfter: last element", () => {
    var x = paper.rect();
    var el = paper.rect();

    el.insertAfter(x);

    equalNodePosition(el.node, paper.canvas, x.node, null);
  });

  test("insertAfter: middle element", () => {
    var x = paper.rect();
    var y = paper.rect();
    var el = paper.rect();

    el.insertAfter(x);

    equalNodePosition(el.node, paper.canvas, x.node, y.node);
  });

  test("insertAfter: no element when wrapped in <a>", () => {
    var el = paper.rect().attr("href", url),
      anchor = el.node.parentNode;

    el.insertAfter(null);

    equalNodePositionWrapped(el.node, anchor, paper.canvas, paper.defs, null);
  });

  test("insertAfter: last element when wrapped in <a>", () => {
    var x = paper.rect();
    var el = paper.rect().attr("href", url),
      anchor = el.node.parentNode;

    el.insertAfter(x);

    equalNodePositionWrapped(el.node, anchor, paper.canvas, x.node, null);
  });

  test("insertAfter: last element wrapped in <a> and wrapped in <a>", () => {
    var x = paper.rect().attr("href", url),
      xAnchor = x.node.parentNode;
    var el = paper.rect().attr("href", url),
      anchor = el.node.parentNode;

    el.insertAfter(x);

    equalNodePositionWrapped(el.node, anchor, paper.canvas, xAnchor, null);
  });

  test("insertAfter: middle element when wrapped in <a>", () => {
    var x = paper.rect();
    var y = paper.rect();
    var el = paper.rect().attr("href", url),
      anchor = el.node.parentNode;

    el.insertAfter(x);

    equalNodePositionWrapped(el.node, anchor, paper.canvas, x.node, y.node);
  });

  test("insertAfter: middle element wrapped in <a> and wrapped in <a>", () => {
    var x = paper.rect().attr("href", url),
      xAnchor = x.node.parentNode;
    var y = paper.rect().attr("href", url),
      yAnchor = y.node.parentNode;
    var el = paper.rect().attr("href", url),
      anchor = el.node.parentNode;

    el.insertAfter(x);

    equalNodePositionWrapped(el.node, anchor, paper.canvas, xAnchor, yAnchor);
  });

  // TODO...
  // insertAfter: with set
  // insertAfter: with nested set.

  // Element#remove
  // --------------

  test("remove: after added", () => {
    var el = paper.rect(),
      node = el.node;

    el.remove();

    equal(el.node, null);
    equal(node.parentNode, null);
  });

  test("remove: when wrapped in <a>", () => {
    var el = paper.rect().attr("href", url),
      node = el.node,
      anchor = node.parentNode;

    el.remove();

    equal(el.node, null);
    equal(node.parentNode, anchor);
    equal(anchor.parentNode, null);
  });

  test("remove: when already removed", () => {
    var el = paper.rect(),
      node = el.node;

    el.remove();
    el.remove();

    equal(el.node, null);
    equal(node.parentNode, null);
  });

  test("remove: when the canvas is removed", () => {
    var el = paper.rect(),
      node = el.node;

    paper.remove();
    el.remove();

    equal(el.node, null);
    equal(node.parentNode, null);
  });

  // Element#toFront
  // --------------

  test("toFront: normal", () => {
    var el = paper.rect();
    var x = paper.rect();

    el.toFront();

    equalNodePosition(el.node, paper.canvas, x.node, null);
  });

  test("toFront: when wrapped in <a>", () => {
    var el = paper.rect().attr("href", url),
      anchor = el.node.parentNode;
    var x = paper.rect();

    el.toFront();

    equalNodePositionWrapped(el.node, anchor, paper.canvas, x.node, null);
  });

  // Element#toBack
  // --------------

  test("toBack: normal", () => {
    var x = paper.rect();
    var el = paper.rect();

    el.toBack();

    equalNodePosition(el.node, paper.canvas, null, paper.desc);
    equalNodePosition(x.node, paper.canvas, paper.defs, null);
  });

  test("toBack: when wrapped in <a>", () => {
    var x = paper.rect();
    var el = paper.rect().attr("href", url),
      anchor = el.node.parentNode;

    el.toBack();

    equalNodePositionWrapped(el.node, anchor, paper.canvas, null, paper.desc);
    equalNodePosition(x.node, paper.canvas, paper.defs, null);
  });

  // Element#attrs
  // -------------

  // #x

  // #y

  // #rx

  // #ry

  // #transform

  // #title

  // #href

  //keep adding and testing!
})();
