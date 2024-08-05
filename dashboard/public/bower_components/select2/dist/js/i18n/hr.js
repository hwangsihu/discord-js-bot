/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/hr", [], () => {
      function e(e) {
        var t = " " + e + " znak";
        return (
          e % 10 < 5 && e % 10 > 0 && (e % 100 < 5 || e % 100 > 19)
            ? e % 10 > 1 && (t += "a")
            : (t += "ova"),
          t
        );
      }
      return {
        errorLoading: () => "Preuzimanje nije uspjelo.",
        inputTooLong: (t) => {
          var n = t.input.length - t.maximum;
          return "Unesite " + e(n);
        },
        inputTooShort: (t) => {
          var n = t.minimum - t.input.length;
          return "Unesite još " + e(n);
        },
        loadingMore: () => "Učitavanje rezultata…",
        maximumSelected: (e) => "Maksimalan broj odabranih stavki je " + e.maximum,
        noResults: () => "Nema rezultata",
        searching: () => "Pretraga…",
        removeAllItems: () => "Ukloni sve stavke",
      };
    }),
    { define: e.define, require: e.require }
  );
})();
