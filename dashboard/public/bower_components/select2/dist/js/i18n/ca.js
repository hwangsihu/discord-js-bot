/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/ca", [], () => ({
      errorLoading: () => "La càrrega ha fallat",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "Si us plau, elimina " + t + " car";
        return t == 1 ? (n += "àcter") : (n += "àcters"), n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "Si us plau, introdueix " + t + " car";
        return t == 1 ? (n += "àcter") : (n += "àcters"), n;
      },
      loadingMore: () => "Carregant més resultats…",
      maximumSelected: (e) => {
        var t = "Només es pot seleccionar " + e.maximum + " element";
        return e.maximum != 1 && (t += "s"), t;
      },
      noResults: () => "No s'han trobat resultats",
      searching: () => "Cercant…",
      removeAllItems: () => "Treu tots els elements",
    })),
    { define: e.define, require: e.require }
  );
})();
