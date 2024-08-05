/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/cs", [], () => {
      function e(e, t) {
        switch (e) {
          case 2:
            return t ? "dva" : "dvě";
          case 3:
            return "tři";
          case 4:
            return "čtyři";
        }
        return "";
      }
      return {
        errorLoading: () => "Výsledky nemohly být načteny.",
        inputTooLong: (t) => {
          var n = t.input.length - t.maximum;
          return n == 1
            ? "Prosím, zadejte o jeden znak méně."
            : n <= 4
              ? "Prosím, zadejte o " + e(n, !0) + " znaky méně."
              : "Prosím, zadejte o " + n + " znaků méně.";
        },
        inputTooShort: (t) => {
          var n = t.minimum - t.input.length;
          return n == 1
            ? "Prosím, zadejte ještě jeden znak."
            : n <= 4
              ? "Prosím, zadejte ještě další " + e(n, !0) + " znaky."
              : "Prosím, zadejte ještě dalších " + n + " znaků.";
        },
        loadingMore: () => "Načítají se další výsledky…",
        maximumSelected: (t) => {
          var n = t.maximum;
          return n == 1
            ? "Můžete zvolit jen jednu položku."
            : n <= 4
              ? "Můžete zvolit maximálně " + e(n, !1) + " položky."
              : "Můžete zvolit maximálně " + n + " položek.";
        },
        noResults: () => "Nenalezeny žádné položky.",
        searching: () => "Vyhledávání…",
        removeAllItems: () => "Odstraňte všechny položky",
      };
    }),
    { define: e.define, require: e.require }
  );
})();
