var webpage = require("webpage"),
  fs = require("fs");

var htmlPath = fs.absolute("test.html");
var examples = [];

function runExample(exampleIndex) {
  if (exampleIndex >= examples.length) {
    phantom.exit(0);
    return;
  }

  var example = examples[exampleIndex];
  var snapshotIndex = 0;
  var page = webpage.create();

  page.viewportSize = { width: 500, height: 300 };
  page.clipRect = { width: 500, height: 300 };
  page.onAlert = (msg) => {
    var e = JSON.parse(msg);
    if (e.fn == "snapshot") {
      page.render("output/" + example.name + snapshotIndex + ".png");
      snapshotIndex += 1;
    } else if (e.fn == "mousemove") {
      page.sendEvent("mousemove", e.x, e.y);
    }
  };

  page.open(htmlPath, (status) => {
    if (status == "fail") {
      console.log("Failed to load test page: " + example.name);
      phantom.exit(1);
    } else {
      page.evaluate(example.runner);
    }
    page.close();
    runExample(exampleIndex + 1);
  });
}

exports.def = (name, runner) => {
  examples.push({ name: name, runner: runner });
};

exports.run = () => {
  if (fs.isDirectory("output")) {
    fs.list("output").forEach((path) => {
      if (path != "." && path != "..") {
        fs.remove("output/" + path);
      }
    });
  } else {
    fs.makeDirectory("output");
  }
  runExample(0);
};
