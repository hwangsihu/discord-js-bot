define(() => {
  // Norwegian (Bokmål)
  return {
    errorLoading: () => "Kunne ikke hente resultater.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      return "Vennligst fjern " + overChars + " tegn";
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      return "Vennligst skriv inn " + remainingChars + " tegn til";
    },
    loadingMore: () => "Laster flere resultater…",
    maximumSelected: (args) => "Du kan velge maks " + args.maximum + " elementer",
    noResults: () => "Ingen treff",
    searching: () => "Søker…",
    removeAllItems: () => "Fjern alle elementer",
  };
});
