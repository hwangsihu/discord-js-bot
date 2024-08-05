/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/eu", [], () => ({
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "Idatzi ";
        return t == 1 ? (n += "karaktere bat") : (n += t + " karaktere"), (n += " gutxiago"), n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "Idatzi ";
        return t == 1 ? (n += "karaktere bat") : (n += t + " karaktere"), (n += " gehiago"), n;
      },
      loadingMore: () => "Emaitza gehiago kargatzen…",
      maximumSelected: (e) =>
        e.maximum === 1
          ? "Elementu bakarra hauta dezakezu"
          : e.maximum + " elementu hauta ditzakezu soilik",
      noResults: () => "Ez da bat datorrenik aurkitu",
      searching: () => "Bilatzen…",
      removeAllItems: () => "Kendu elementu guztiak",
    })),
    { define: e.define, require: e.require }
  );
})();
