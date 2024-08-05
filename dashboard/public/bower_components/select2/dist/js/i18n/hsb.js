/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/hsb", [], () => {
      var e = ["znamješko", "znamješce", "znamješka", "znamješkow"],
        t = ["zapisk", "zapiskaj", "zapiski", "zapiskow"],
        n = (t, n) => {
          if (t === 1) return n[0];
          if (t === 2) return n[1];
          if (t > 2 && t <= 4) return n[2];
          if (t >= 5) return n[3];
        };
      return {
        errorLoading: () => "Wuslědki njedachu so začitać.",
        inputTooLong: (t) => {
          var r = t.input.length - t.maximum;
          return "Prošu zhašej " + r + " " + n(r, e);
        },
        inputTooShort: (t) => {
          var r = t.minimum - t.input.length;
          return "Prošu zapodaj znajmjeńša " + r + " " + n(r, e);
        },
        loadingMore: () => "Dalše wuslědki so začitaja…",
        maximumSelected: (e) => "Móžeš jenož " + e.maximum + " " + n(e.maximum, t) + "wubrać",
        noResults: () => "Žane wuslědki namakane",
        searching: () => "Pyta so…",
        removeAllItems: () => "Remove all items",
      };
    }),
    { define: e.define, require: e.require }
  );
})();
