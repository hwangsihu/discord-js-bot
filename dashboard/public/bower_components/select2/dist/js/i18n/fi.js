/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/fi", [], () => ({
      errorLoading: () => "Tuloksia ei saatu ladattua.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum;
        return "Ole hyvä ja anna " + t + " merkkiä vähemmän";
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length;
        return "Ole hyvä ja anna " + t + " merkkiä lisää";
      },
      loadingMore: () => "Ladataan lisää tuloksia…",
      maximumSelected: (e) => "Voit valita ainoastaan " + e.maximum + " kpl",
      noResults: () => "Ei tuloksia",
      searching: () => "Haetaan…",
      removeAllItems: () => "Poista kaikki kohteet",
    })),
    { define: e.define, require: e.require }
  );
})();
