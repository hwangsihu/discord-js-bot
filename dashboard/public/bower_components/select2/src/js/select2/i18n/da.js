define(() => {
  // Danish
  return {
    errorLoading: () => "Resultaterne kunne ikke indlæses.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      return "Angiv venligst " + overChars + " tegn mindre";
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      return "Angiv venligst " + remainingChars + " tegn mere";
    },
    loadingMore: () => "Indlæser flere resultater…",
    maximumSelected: (args) => {
      var message = "Du kan kun vælge " + args.maximum + " emne";

      if (args.maximum != 1) {
        message += "r";
      }

      return message;
    },
    noResults: () => "Ingen resultater fundet",
    searching: () => "Søger…",
    removeAllItems: () => "Fjern alle elementer",
  };
});
