define(() => {
  // Finnish
  return {
    errorLoading: () => "Tuloksia ei saatu ladattua.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      return "Ole hyvä ja anna " + overChars + " merkkiä vähemmän";
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      return "Ole hyvä ja anna " + remainingChars + " merkkiä lisää";
    },
    loadingMore: () => "Ladataan lisää tuloksia…",
    maximumSelected: (args) => "Voit valita ainoastaan " + args.maximum + " kpl",
    noResults: () => "Ei tuloksia",
    searching: () => "Haetaan…",
    removeAllItems: () => "Poista kaikki kohteet",
  };
});
