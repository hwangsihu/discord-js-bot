/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/it", [], () => ({
      errorLoading: () => "I risultati non possono essere caricati.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "Per favore cancella " + t + " caratter";
        return t !== 1 ? (n += "i") : (n += "e"), n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "Per favore inserisci " + t + " o più caratteri";
        return n;
      },
      loadingMore: () => "Caricando più risultati…",
      maximumSelected: (e) => {
        var t = "Puoi selezionare solo " + e.maximum + " element";
        return e.maximum !== 1 ? (t += "i") : (t += "o"), t;
      },
      noResults: () => "Nessun risultato trovato",
      searching: () => "Sto cercando…",
      removeAllItems: () => "Rimuovi tutti gli oggetti",
    })),
    { define: e.define, require: e.require }
  );
})();
