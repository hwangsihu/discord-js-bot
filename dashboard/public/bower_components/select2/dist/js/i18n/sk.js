/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/sk", [], () => {
      var e = {
        2: (e) => (e ? "dva" : "dve"),
        3: () => "tri",
        4: () => "štyri",
      };
      return {
        errorLoading: () => "Výsledky sa nepodarilo načítať.",
        inputTooLong: (t) => {
          var n = t.input.length - t.maximum;
          return n == 1
            ? "Prosím, zadajte o jeden znak menej"
            : n >= 2 && n <= 4
              ? "Prosím, zadajte o " + e[n](!0) + " znaky menej"
              : "Prosím, zadajte o " + n + " znakov menej";
        },
        inputTooShort: (t) => {
          var n = t.minimum - t.input.length;
          return n == 1
            ? "Prosím, zadajte ešte jeden znak"
            : n <= 4
              ? "Prosím, zadajte ešte ďalšie " + e[n](!0) + " znaky"
              : "Prosím, zadajte ešte ďalších " + n + " znakov";
        },
        loadingMore: () => "Načítanie ďalších výsledkov…",
        maximumSelected: (t) =>
          t.maximum == 1
            ? "Môžete zvoliť len jednu položku"
            : t.maximum >= 2 && t.maximum <= 4
              ? "Môžete zvoliť najviac " + e[t.maximum](!1) + " položky"
              : "Môžete zvoliť najviac " + t.maximum + " položiek",
        noResults: () => "Nenašli sa žiadne položky",
        searching: () => "Vyhľadávanie…",
        removeAllItems: () => "Odstráňte všetky položky",
      };
    }),
    { define: e.define, require: e.require }
  );
})();
