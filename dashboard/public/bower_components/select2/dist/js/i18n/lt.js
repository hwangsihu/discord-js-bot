/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/lt", [], () => {
      function e(e, t, n, r) {
        return e % 10 === 1 && (e % 100 < 11 || e % 100 > 19)
          ? t
          : e % 10 >= 2 && e % 10 <= 9 && (e % 100 < 11 || e % 100 > 19)
            ? n
            : r;
      }
      return {
        inputTooLong: (t) => {
          var n = t.input.length - t.maximum,
            r = "Pašalinkite " + n + " simbol";
          return (r += e(n, "į", "ius", "ių")), r;
        },
        inputTooShort: (t) => {
          var n = t.minimum - t.input.length,
            r = "Įrašykite dar " + n + " simbol";
          return (r += e(n, "į", "ius", "ių")), r;
        },
        loadingMore: () => "Kraunama daugiau rezultatų…",
        maximumSelected: (t) => {
          var n = "Jūs galite pasirinkti tik " + t.maximum + " element";
          return (n += e(t.maximum, "ą", "us", "ų")), n;
        },
        noResults: () => "Atitikmenų nerasta",
        searching: () => "Ieškoma…",
        removeAllItems: () => "Pašalinti visus elementus",
      };
    }),
    { define: e.define, require: e.require }
  );
})();
