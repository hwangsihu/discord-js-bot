/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/af", [], () => ({
      errorLoading: () => "Die resultate kon nie gelaai word nie.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "Verwyders asseblief " + t + " character";
        return t != 1 && (n += "s"), n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "Voer asseblief " + t + " of meer karakters";
        return n;
      },
      loadingMore: () => "Meer resultate word gelaai…",
      maximumSelected: (e) => {
        var t = "Kies asseblief net " + e.maximum + " item";
        return e.maximum != 1 && (t += "s"), t;
      },
      noResults: () => "Geen resultate gevind",
      searching: () => "Besig…",
      removeAllItems: () => "Verwyder alle items",
    })),
    { define: e.define, require: e.require }
  );
})();
