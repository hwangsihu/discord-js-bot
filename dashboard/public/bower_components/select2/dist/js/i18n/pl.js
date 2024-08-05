/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/pl", [], () => {
      var e = ["znak", "znaki", "znaków"],
        t = ["element", "elementy", "elementów"],
        n = (t, n) => {
          if (t === 1) return n[0];
          if (t > 1 && t <= 4) return n[1];
          if (t >= 5) return n[2];
        };
      return {
        errorLoading: () => "Nie można załadować wyników.",
        inputTooLong: (t) => {
          var r = t.input.length - t.maximum;
          return "Usuń " + r + " " + n(r, e);
        },
        inputTooShort: (t) => {
          var r = t.minimum - t.input.length;
          return "Podaj przynajmniej " + r + " " + n(r, e);
        },
        loadingMore: () => "Trwa ładowanie…",
        maximumSelected: (e) => "Możesz zaznaczyć tylko " + e.maximum + " " + n(e.maximum, t),
        noResults: () => "Brak wyników",
        searching: () => "Trwa wyszukiwanie…",
        removeAllItems: () => "Usuń wszystkie przedmioty",
      };
    }),
    { define: e.define, require: e.require }
  );
})();
