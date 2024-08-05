/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
var autocompleteUtils = {
  generateData: (a, c) =>
    Object.keys(a)
      .sort()
      .map((a, b) => ({ id: b, name: c + a })),
  getAsyncDataCallback: (a) => (c, d, b) => {
    setTimeout(() => {
      b(a.filter((a) => 0 === a.name.indexOf(c)));
    }, 500 * Math.random());
  },
  getSyncDataCallback: (a) => (c, d, b) => {
    b(a.filter((a) => 0 === a.name.indexOf(c)));
  },
  getTextTestCallback: (a, c, d) => {
    function b(a, c) {
      var b = a.slice(0, c),
        e = a.slice(c),
        b = b.match(f);
      return !b || (d && e && !e.match(/^\s/)) ? null : { start: b.index, end: c };
    }
    var f = (() => {
      var b = a + "\\w",
        b = c ? b + ("{" + c + ",}") : b + "*";
      return new RegExp(b + "$");
    })();
    return (a) => (a.collapsed ? CKEDITOR.plugins.textMatch.match(a, b) : null);
  },
};
