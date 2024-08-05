/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/dsb", [], () => {
      var e = ["znamuško", "znamušce", "znamuška", "znamuškow"],
        t = ["zapisk", "zapiska", "zapiski", "zapiskow"],
        n = (t, n) => {
          if (t === 1) return n[0];
          if (t === 2) return n[1];
          if (t > 2 && t <= 4) return n[2];
          if (t >= 5) return n[3];
        };
      return {
        errorLoading: () => "Wuslědki njejsu se dali zacytaś.",
        inputTooLong: (t) => {
          var r = t.input.length - t.maximum;
          return "Pšosym lašuj " + r + " " + n(r, e);
        },
        inputTooShort: (t) => {
          var r = t.minimum - t.input.length;
          return "Pšosym zapódaj nanejmjenjej " + r + " " + n(r, e);
        },
        loadingMore: () => "Dalšne wuslědki se zacytaju…",
        maximumSelected: (e) => "Móžoš jano " + e.maximum + " " + n(e.maximum, t) + "wubraś.",
        noResults: () => "Žedne wuslědki namakane",
        searching: () => "Pyta se…",
        removeAllItems: () => "Remove all items",
      };
    }),
    { define: e.define, require: e.require }
  );
})();
