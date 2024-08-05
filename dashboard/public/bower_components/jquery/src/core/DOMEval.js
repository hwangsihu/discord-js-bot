define(["../var/document"], (document) => {
  var preservedScriptAttributes = {
    type: true,
    src: true,
    noModule: true,
  };

  function domEval(code, doc, node) {
    doc = doc || document;

    var i,
      script = doc.createElement("script");

    script.text = code;
    if (node) {
      for (i in preservedScriptAttributes) {
        if (node[i]) {
          script[i] = node[i];
        }
      }
    }
    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  return domEval;
});
