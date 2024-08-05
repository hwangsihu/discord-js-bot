define(() => {
  // Italian
  return {
    errorLoading: () => "I risultati non possono essere caricati.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Per favore cancella " + overChars + " caratter";

      if (overChars !== 1) {
        message += "i";
      } else {
        message += "e";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Per favore inserisci " + remainingChars + " o più caratteri";

      return message;
    },
    loadingMore: () => "Caricando più risultati…",
    maximumSelected: (args) => {
      var message = "Puoi selezionare solo " + args.maximum + " element";

      if (args.maximum !== 1) {
        message += "i";
      } else {
        message += "o";
      }

      return message;
    },
    noResults: () => "Nessun risultato trovato",
    searching: () => "Sto cercando…",
    removeAllItems: () => "Rimuovi tutti gli oggetti",
  };
});
