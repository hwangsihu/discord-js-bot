/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
((a) => {
  if ("undefined" == typeof a)
    throw Error("jQuery should be loaded before CKEditor jQuery adapter.");
  if ("undefined" == typeof CKEDITOR)
    throw Error("CKEditor should be loaded before CKEditor jQuery adapter.");
  CKEDITOR.config.jqueryOverrideVal =
    "undefined" == typeof CKEDITOR.config.jqueryOverrideVal
      ? !0
      : CKEDITOR.config.jqueryOverrideVal;
  a.extend(a.fn, {
    ckeditorGet: function () {
      var a = this.eq(0).data("ckeditorInstance");
      if (!a) throw "CKEditor is not initialized yet, use ckeditor() with a callback.";
      return a;
    },
    ckeditor: function (g, d) {
      if (!CKEDITOR.env.isCompatible) throw Error("The environment is incompatible.");
      if (!a.isFunction(g)) {
        var m = d;
        d = g;
        g = m;
      }
      var k = [];
      d = d || {};
      this.each(function () {
        var b = a(this),
          c = b.data("ckeditorInstance"),
          f = b.data("_ckeditorInstanceLock"),
          l = new a.Deferred();
        k.push(l.promise());
        if (c && !f) g && g.apply(c, [this]), l.resolve();
        else if (f)
          c.once(
            "instanceReady",
            () => {
              setTimeout(() => {
                c.element
                  ? (c.element.$ == this && g && g.apply(c, [this]), l.resolve())
                  : setTimeout(arguments.callee, 100);
              }, 0);
            },
            null,
            null,
            9999
          );
        else {
          if (
            d.autoUpdateElement ||
            ("undefined" == typeof d.autoUpdateElement && CKEDITOR.config.autoUpdateElement)
          )
            d.autoUpdateElementJquery = !0;
          d.autoUpdateElement = !1;
          b.data("_ckeditorInstanceLock", !0);
          c = a(this).is("textarea") ? CKEDITOR.replace(this, d) : CKEDITOR.inline(this, d);
          b.data("ckeditorInstance", c);
          c.on(
            "instanceReady",
            (d) => {
              var e = d.editor;
              setTimeout(() => {
                if (e.element) {
                  d.removeListener();
                  e.on("dataReady", () => {
                    b.trigger("dataReady.ckeditor", [e]);
                  });
                  e.on("setData", (a) => {
                    b.trigger("setData.ckeditor", [e, a.data]);
                  });
                  e.on(
                    "getData",
                    (a) => {
                      b.trigger("getData.ckeditor", [e, a.data]);
                    },
                    999
                  );
                  e.on("destroy", () => {
                    b.trigger("destroy.ckeditor", [e]);
                  });
                  e.on(
                    "save",
                    () => {
                      a(this.form).submit();
                      return !1;
                    },
                    null,
                    null,
                    20
                  );
                  if (e.config.autoUpdateElementJquery && b.is("textarea") && a(this.form).length) {
                    var c = () => {
                      b.ckeditor(() => {
                        e.updateElement();
                      });
                    };
                    a(this.form).submit(c);
                    a(this.form).bind("form-pre-serialize", c);
                    b.bind("destroy.ckeditor", () => {
                      a(this.form).unbind("submit", c);
                      a(this.form).unbind("form-pre-serialize", c);
                    });
                  }
                  e.on("destroy", () => {
                    b.removeData("ckeditorInstance");
                  });
                  b.removeData("_ckeditorInstanceLock");
                  b.trigger("instanceReady.ckeditor", [e]);
                  g && g.apply(e, [this]);
                  l.resolve();
                } else setTimeout(arguments.callee, 100);
              }, 0);
            },
            null,
            null,
            9999
          );
        }
      });
      var f = new a.Deferred();
      this.promise = f.promise();
      a.when.apply(this, k).then(() => {
        f.resolve();
      });
      this.editor = this.eq(0).data("ckeditorInstance");
      return this;
    },
  });
  CKEDITOR.config.jqueryOverrideVal &&
    (a.fn.val = CKEDITOR.tools.override(
      a.fn.val,
      (g) =>
        function (d) {
          if (arguments.length) {
            var k = [],
              f = this.each(function () {
                var b = a(this),
                  c = b.data("ckeditorInstance");
                if (b.is("textarea") && c) {
                  var f = new a.Deferred();
                  c.setData(d, () => {
                    f.resolve();
                  });
                  k.push(f.promise());
                  return !0;
                }
                return g.call(b, d);
              });
            if (k.length) {
              var b = new a.Deferred();
              a.when.apply(this, k).done(() => {
                b.resolveWith(this);
              });
              return b.promise();
            }
            return f;
          }
          var f = a(this).eq(0),
            c = f.data("ckeditorInstance");
          return f.is("textarea") && c ? c.getData() : g.call(f);
        }
    ));
})(window.jQuery);
