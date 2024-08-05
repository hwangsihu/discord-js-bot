module("Data adapters - Tags");

var SelectData = require("select2/data/select");
var Tags = require("select2/data/tags");

var $ = require("jquery");
var Options = require("select2/options");
var Utils = require("select2/utils");

var SelectTags = Utils.Decorate(SelectData, Tags);
var options = new Options({
  tags: true,
});

test("does not trigger on blank or null terms", (assert) => {
  var data = new SelectTags($("#qunit-fixture .single"), options);

  data.query(
    {
      term: "",
    },
    (data) => {
      assert.equal(data.results.length, 1);

      var item = data.results[0];

      assert.equal(item.id, "One");
      assert.equal(item.text, "One");
    }
  );

  data.query(
    {
      term: null,
    },
    (data) => {
      assert.equal(data.results.length, 1);

      var item = data.results[0];

      assert.equal(item.id, "One");
      assert.equal(item.text, "One");
    }
  );
});

test("white space is trimmed by default", (assert) => {
  var data = new SelectTags($("#qunit-fixture .single"), options);

  data.query(
    {
      term: "  ",
    },
    (data) => {
      assert.equal(data.results.length, 1);

      var item = data.results[0];

      assert.equal(item.id, "One");
      assert.equal(item.text, "One");
    }
  );

  data.query(
    {
      term: " One ",
    },
    (data) => {
      assert.equal(data.results.length, 1);

      var item = data.results[0];

      assert.equal(item.id, "One");
      assert.equal(item.text, "One");
    }
  );
});

test("does not create option if text is same but lowercase", (assert) => {
  var data = new SelectTags($("#qunit-fixture .single"), options);

  data.query(
    {
      term: "one",
    },
    (data) => {
      assert.equal(data.results.length, 1);

      var item = data.results[0];

      assert.equal(item.id, "One");
      assert.equal(item.text, "One");
    }
  );
});

test("does not trigger for additional pages", (assert) => {
  var data = new SelectTags($("#qunit-fixture .single"), options);

  data.query(
    {
      page: 2,
    },
    (data) => {
      assert.equal(data.results.length, 1);

      var item = data.results[0];

      assert.equal(item.id, "One");
      assert.equal(item.text, "One");
    }
  );
});

test("creates tag at beginning", (assert) => {
  var data = new SelectTags($("#qunit-fixture .single"), options);

  data.query(
    {
      term: "o",
    },
    (data) => {
      assert.equal(data.results.length, 2);

      var first = data.results[0];

      assert.equal(first.id, "o");
      assert.equal(first.text, "o");
    }
  );
});

test("tags can be the only result", (assert) => {
  var data = new SelectTags($("#qunit-fixture .single"), options);

  data.query(
    {
      term: "test",
    },
    (data) => {
      assert.equal(data.results.length, 1);

      var item = data.results[0];

      assert.equal(item.id, "test");
      assert.equal(item.text, "test");
    }
  );
});

test("tags are injected as options", (assert) => {
  var data = new SelectTags($("#qunit-fixture .single"), options);

  data.query(
    {
      term: "test",
    },
    (data) => {
      assert.equal(data.results.length, 1);

      var $children = $("#qunit-fixture .single option");

      assert.equal($children.length, 2);

      var $tag = $children.last();

      assert.equal($tag.val(), "test");
      assert.equal($tag.text(), "test");
    }
  );
});

test("old tags are removed automatically", (assert) => {
  var data = new SelectTags($("#qunit-fixture .single"), options);

  data.query(
    {
      term: "first",
    },
    (data) => {
      assert.equal(data.results.length, 1);

      var $children = $("#qunit-fixture .single option");

      assert.equal($children.length, 2);
    }
  );

  data.query(
    {
      term: "second",
    },
    (data) => {
      assert.equal(data.results.length, 1);

      var $children = $("#qunit-fixture .single option");

      assert.equal($children.length, 2);

      var $tag = $children.last();

      assert.equal($tag.val(), "second");
      assert.equal($tag.text(), "second");
    }
  );
});

test("insertTag controls the tag location", (assert) => {
  var data = new SelectTags($("#qunit-fixture .single"), options);

  data.insertTag = (data, tag) => {
    data.push(tag);
  };

  data.query(
    {
      term: "o",
    },
    (data) => {
      assert.equal(data.results.length, 2);

      var item = data.results[1];

      assert.equal(item.id, "o");
      assert.equal(item.text, "o");
    }
  );
});

test("insertTag can be controlled through the options", (assert) => {
  var options = new Options({
    insertTag: (data, tag) => {
      data.push(tag);
    },
  });
  var data = new SelectTags($("#qunit-fixture .single"), options);

  data.query(
    {
      term: "o",
    },
    (data) => {
      assert.equal(data.results.length, 2);

      var item = data.results[1];

      assert.equal(item.id, "o");
      assert.equal(item.text, "o");
    }
  );
});

test("createTag controls the tag object", (assert) => {
  var data = new SelectTags($("#qunit-fixture .single"), options);

  data.createTag = (params) => ({
    id: 0,
    text: params.term,
  });

  data.query(
    {
      term: "test",
    },
    (data) => {
      assert.equal(data.results.length, 1);

      var item = data.results[0];

      assert.equal(item.id, 0);
      assert.equal(item.text, "test");
    }
  );
});

test("createTag returns null for no tag", (assert) => {
  var data = new SelectTags($("#qunit-fixture .single"), options);

  data.createTag = (params) => null;

  data.query(
    {
      term: "o",
    },
    (data) => {
      assert.equal(data.results.length, 1);
    }
  );
});

test("the createTag options customizes the function", (assert) => {
  var data = new SelectTags(
    $("#qunit-fixture .single"),
    new Options({
      tags: true,
      createTag: (params) => ({
        id: params.term,
        text: params.term,
        tag: true,
      }),
    })
  );

  data.query(
    {
      term: "test",
    },
    (data) => {
      assert.equal(data.results.length, 1);

      var item = data.results[0];

      assert.equal(item.id, "test");
      assert.equal(item.text, "test");
      assert.equal(item.tag, true);
    }
  );
});
