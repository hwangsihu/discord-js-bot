/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(() => {
  function f(a) {
    a = a.getElementsByTag("*");
    for (var c = a.count(), b, d = 0; d < c; d++)
      (b = a.getItem(d)),
        ((a) => {
          for (var b = 0; b < l.length; b++)
            ((b) => {
              var d = a.getAttribute("on" + b);
              a.hasAttribute("on" + b) &&
                (a.removeAttribute("on" + b),
                a.on(b, (b) => {
                  var c = /(return\s*)?CKEDITOR\.tools\.callFunction\(([^)]+)\)/.exec(d),
                    k = c && c[1],
                    e = c && c[2].split(","),
                    c = /return false;/.test(d);
                  if (e) {
                    for (var m = e.length, h, g = 0; g < m; g++) {
                      e[g] = h = CKEDITOR.tools.trim(e[g]);
                      var f = h.match(/^(["'])([^"']*?)\1$/);
                      if (f) e[g] = f[2];
                      else if (h.match(/\d+/)) e[g] = Number.parseInt(h, 10);
                      else
                        switch (h) {
                          case "this":
                            e[g] = a.$;
                            break;
                          case "event":
                            e[g] = b.data.$;
                            break;
                          case "null":
                            e[g] = null;
                        }
                    }
                    e = CKEDITOR.tools.callFunction.apply(window, e);
                    k && !1 === e && (c = 1);
                  }
                  c && b.data.preventDefault();
                }));
            })(l[b]);
        })(b);
  }
  var l = "click keydown mousedown keypress mouseover mouseout".split(" ");
  CKEDITOR.plugins.add("adobeair", {
    onLoad: () => {
      CKEDITOR.env.air &&
        ((CKEDITOR.dom.document.prototype.write = CKEDITOR.tools.override(
          CKEDITOR.dom.document.prototype.write,
          (a) => {
            function c(b, a, c, k) {
              a = b.append(a);
              (c = CKEDITOR.htmlParser.fragment.fromHtml(c).children[0].attributes) &&
                a.setAttributes(c);
              k && a.append(b.getDocument().createText(k));
            }
            return function (b) {
              if (this.getBody()) {
                var f = this.getHead();
                b = b.replace(/(<style[^>]*>)([\s\S]*?)<\/style>/gi, (a, b, d) => {
                  c(f, "style", b, d);
                  return "";
                });
                b = b.replace(/<base\b[^>]*\/>/i, (b) => {
                  c(f, "base", b);
                  return "";
                });
                b = b.replace(/<title>([\s\S]*)<\/title>/i, (b, a) => {
                  this.$.title = a;
                  return "";
                });
                b = b.replace(/<head>([\s\S]*)<\/head>/i, (b) => {
                  var a = new CKEDITOR.dom.element("div", this);
                  a.setHtml(b);
                  a.moveChildren(f);
                  return "";
                });
                b.replace(/(<body[^>]*>)([\s\S]*)(?=$|<\/body>)/i, (b, a, c) => {
                  this.getBody().setHtml(c);
                  (b = CKEDITOR.htmlParser.fragment.fromHtml(a).children[0].attributes) &&
                    this.getBody().setAttributes(b);
                });
              } else a.apply(this, arguments);
            };
          }
        )),
        CKEDITOR.addCss("body.cke_editable { padding: 8px }"),
        CKEDITOR.ui.on("ready", (a) => {
          a = a.data;
          if (a._.panel) {
            var c = a._.panel._.panel,
              b;
            (() => {
              c.isLoaded ? ((b = c._.holder), f(b)) : setTimeout(arguments.callee, 30);
            })();
          } else a instanceof CKEDITOR.dialog && f(a._.element);
        }));
    },
    init: (a) => {
      CKEDITOR.env.air &&
        (a.on("uiReady", () => {
          f(a.container);
          a.on("elementsPathUpdate", (a) => {
            f(a.data.space);
          });
        }),
        a.on("contentDom", () => {
          a.document.on("click", (a) => {
            a.data.preventDefault(!0);
          });
        }));
    },
  });
})();
