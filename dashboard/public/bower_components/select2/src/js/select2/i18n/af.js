define(() => {
  // English
  return {
    errorLoading: () => "Die resultate kon nie gelaai word nie.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Verwyders asseblief " + overChars + " character";

      if (overChars != 1) {
        message += "s";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Voer asseblief " + remainingChars + " of meer karakters";

      return message;
    },
    loadingMore: () => "Meer resultate word gelaai…",
    maximumSelected: (args) => {
      var message = "Kies asseblief net " + args.maximum + " item";

      if (args.maximum != 1) {
        message += "s";
      }

      return message;
    },
    noResults: () => "Geen resultate gevind",
    searching: () => "Besig…",
    removeAllItems: () => "Verwyder alle items",
  };
});
