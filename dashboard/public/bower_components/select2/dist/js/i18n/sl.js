/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/sl", [], () => ({
      errorLoading: () => "Zadetkov iskanja ni bilo mogoče naložiti.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "Prosim zbrišite " + t + " znak";
        return t == 2 ? (n += "a") : t != 1 && (n += "e"), n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "Prosim vpišite še " + t + " znak";
        return t == 2 ? (n += "a") : t != 1 && (n += "e"), n;
      },
      loadingMore: () => "Nalagam več zadetkov…",
      maximumSelected: (e) => {
        var t = "Označite lahko največ " + e.maximum + " predmet";
        return e.maximum == 2 ? (t += "a") : e.maximum != 1 && (t += "e"), t;
      },
      noResults: () => "Ni zadetkov.",
      searching: () => "Iščem…",
      removeAllItems: () => "Odstranite vse elemente",
    })),
    { define: e.define, require: e.require }
  );
})();
