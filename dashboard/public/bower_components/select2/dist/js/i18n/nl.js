/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/nl", [], () => ({
      errorLoading: () => "De resultaten konden niet worden geladen.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "Gelieve " + t + " karakters te verwijderen";
        return n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "Gelieve " + t + " of meer karakters in te voeren";
        return n;
      },
      loadingMore: () => "Meer resultaten laden…",
      maximumSelected: (e) => {
        var t = e.maximum == 1 ? "kan" : "kunnen",
          n = "Er " + t + " maar " + e.maximum + " item";
        return e.maximum != 1 && (n += "s"), (n += " worden geselecteerd"), n;
      },
      noResults: () => "Geen resultaten gevonden…",
      searching: () => "Zoeken…",
      removeAllItems: () => "Verwijder alle items",
    })),
    { define: e.define, require: e.require }
  );
})();
