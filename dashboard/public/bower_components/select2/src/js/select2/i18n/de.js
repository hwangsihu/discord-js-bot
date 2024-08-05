define(() => {
  // German
  return {
    errorLoading: () => "Die Ergebnisse konnten nicht geladen werden.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      return "Bitte " + overChars + " Zeichen weniger eingeben";
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      return "Bitte " + remainingChars + " Zeichen mehr eingeben";
    },
    loadingMore: () => "Lade mehr Ergebnisse…",
    maximumSelected: (args) => {
      var message = "Sie können nur " + args.maximum + " Eintr";

      if (args.maximum === 1) {
        message += "ag";
      } else {
        message += "äge";
      }

      message += " auswählen";

      return message;
    },
    noResults: () => "Keine Übereinstimmungen gefunden",
    searching: () => "Suche…",
    removeAllItems: () => "Entferne alle Gegenstände",
  };
});
