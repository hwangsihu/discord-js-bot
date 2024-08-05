define(() => {
  // Dutch
  return {
    errorLoading: () => "De resultaten konden niet worden geladen.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Gelieve " + overChars + " karakters te verwijderen";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Gelieve " + remainingChars + " of meer karakters in te voeren";

      return message;
    },
    loadingMore: () => "Meer resultaten laden…",
    maximumSelected: (args) => {
      var verb = args.maximum == 1 ? "kan" : "kunnen";
      var message = "Er " + verb + " maar " + args.maximum + " item";

      if (args.maximum != 1) {
        message += "s";
      }
      message += " worden geselecteerd";

      return message;
    },
    noResults: () => "Geen resultaten gevonden…",
    searching: () => "Zoeken…",
    removeAllItems: () => "Verwijder alle items",
  };
});
