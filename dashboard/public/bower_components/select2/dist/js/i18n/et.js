/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/et", [], () => ({
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "Sisesta " + t + " täht";
        return t != 1 && (n += "e"), (n += " vähem"), n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "Sisesta " + t + " täht";
        return t != 1 && (n += "e"), (n += " rohkem"), n;
      },
      loadingMore: () => "Laen tulemusi…",
      maximumSelected: (e) => {
        var t = "Saad vaid " + e.maximum + " tulemus";
        return e.maximum == 1 ? (t += "e") : (t += "t"), (t += " valida"), t;
      },
      noResults: () => "Tulemused puuduvad",
      searching: () => "Otsin…",
      removeAllItems: () => "Eemalda kõik esemed",
    })),
    { define: e.define, require: e.require }
  );
})();
