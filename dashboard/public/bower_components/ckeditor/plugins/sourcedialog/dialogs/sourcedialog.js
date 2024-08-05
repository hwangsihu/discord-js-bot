/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("sourcedialog", (a) => {
  var b = CKEDITOR.document.getWindow().getViewPaneSize(),
    e = Math.min(b.width - 70, 800),
    b = b.height / 1.5,
    d;
  return {
    title: a.lang.sourcedialog.title,
    minWidth: 100,
    minHeight: 100,
    onShow: function () {
      this.setValueOf("main", "data", (d = a.getData()));
    },
    onOk: (() => {
      function b(f, c) {
        a.focus();
        a.setData(c, () => {
          f.hide();
          var b = a.createRange();
          b.moveToElementEditStart(a.editable());
          b.select();
        });
      }
      return function () {
        var a = this.getValueOf("main", "data").replace(/\r/g, "");
        if (a === d) return !0;
        setTimeout(() => {
          b(this, a);
        });
        return !1;
      };
    })(),
    contents: [
      {
        id: "main",
        label: a.lang.sourcedialog.title,
        elements: [
          {
            type: "textarea",
            id: "data",
            dir: "ltr",
            inputStyle:
              "cursor:auto;width:" + e + "px;height:" + b + "px;tab-size:4;text-align:left;",
            class: "cke_source",
          },
        ],
      },
    ],
  };
});
