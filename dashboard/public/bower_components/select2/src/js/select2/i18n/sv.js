define(() => {
  // Swedish
  return {
    errorLoading: () => "Resultat kunde inte laddas.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Vänligen sudda ut " + overChars + " tecken";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Vänligen skriv in " + remainingChars + " eller fler tecken";

      return message;
    },
    loadingMore: () => "Laddar fler resultat…",
    maximumSelected: (args) => {
      var message = "Du kan max välja " + args.maximum + " element";

      return message;
    },
    noResults: () => "Inga träffar",
    searching: () => "Söker…",
    removeAllItems: () => "Ta bort alla objekt",
  };
});
