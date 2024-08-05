/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/nb", [], () => ({
      errorLoading: () => "Kunne ikke hente resultater.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum;
        return "Vennligst fjern " + t + " tegn";
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length;
        return "Vennligst skriv inn " + t + " tegn til";
      },
      loadingMore: () => "Laster flere resultater…",
      maximumSelected: (e) => "Du kan velge maks " + e.maximum + " elementer",
      noResults: () => "Ingen treff",
      searching: () => "Søker…",
      removeAllItems: () => "Fjern alle elementer",
    })),
    { define: e.define, require: e.require }
  );
})();
