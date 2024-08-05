/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/hu", [], () => ({
      errorLoading: () => "Az eredmények betöltése nem sikerült.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum;
        return "Túl hosszú. " + t + " karakterrel több, mint kellene.";
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length;
        return "Túl rövid. Még " + t + " karakter hiányzik.";
      },
      loadingMore: () => "Töltés…",
      maximumSelected: (e) => "Csak " + e.maximum + " elemet lehet kiválasztani.",
      noResults: () => "Nincs találat.",
      searching: () => "Keresés…",
      removeAllItems: () => "Távolítson el minden elemet",
    })),
    { define: e.define, require: e.require }
  );
})();
