/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/da", [], () => ({
      errorLoading: () => "Resultaterne kunne ikke indlæses.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum;
        return "Angiv venligst " + t + " tegn mindre";
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length;
        return "Angiv venligst " + t + " tegn mere";
      },
      loadingMore: () => "Indlæser flere resultater…",
      maximumSelected: (e) => {
        var t = "Du kan kun vælge " + e.maximum + " emne";
        return e.maximum != 1 && (t += "r"), t;
      },
      noResults: () => "Ingen resultater fundet",
      searching: () => "Søger…",
      removeAllItems: () => "Fjern alle elementer",
    })),
    { define: e.define, require: e.require }
  );
})();
