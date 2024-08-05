/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/tk", [], () => ({
      errorLoading: () => "Netije ýüklenmedi.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = t + " harp bozuň.";
        return n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "Ýene-de iň az " + t + " harp ýazyň.";
        return n;
      },
      loadingMore: () => "Köpräk netije görkezilýär…",
      maximumSelected: (e) => {
        var t = "Diňe " + e.maximum + " sanysyny saýlaň.";
        return t;
      },
      noResults: () => "Netije tapylmady.",
      searching: () => "Gözlenýär…",
      removeAllItems: () => "Remove all items",
    })),
    { define: e.define, require: e.require }
  );
})();
