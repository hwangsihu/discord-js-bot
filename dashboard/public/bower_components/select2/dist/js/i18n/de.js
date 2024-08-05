/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/de", [], () => ({
      errorLoading: () => "Die Ergebnisse konnten nicht geladen werden.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum;
        return "Bitte " + t + " Zeichen weniger eingeben";
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length;
        return "Bitte " + t + " Zeichen mehr eingeben";
      },
      loadingMore: () => "Lade mehr Ergebnisse…",
      maximumSelected: (e) => {
        var t = "Sie können nur " + e.maximum + " Eintr";
        return e.maximum === 1 ? (t += "ag") : (t += "äge"), (t += " auswählen"), t;
      },
      noResults: () => "Keine Übereinstimmungen gefunden",
      searching: () => "Suche…",
      removeAllItems: () => "Entferne alle Gegenstände",
    })),
    { define: e.define, require: e.require }
  );
})();
