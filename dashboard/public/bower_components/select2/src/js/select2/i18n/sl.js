define(() => {
  // Slovene
  return {
    errorLoading: () => "Zadetkov iskanja ni bilo mogoče naložiti.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Prosim zbrišite " + overChars + " znak";

      if (overChars == 2) {
        message += "a";
      } else if (overChars != 1) {
        message += "e";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Prosim vpišite še " + remainingChars + " znak";

      if (remainingChars == 2) {
        message += "a";
      } else if (remainingChars != 1) {
        message += "e";
      }

      return message;
    },
    loadingMore: () => "Nalagam več zadetkov…",
    maximumSelected: (args) => {
      var message = "Označite lahko največ " + args.maximum + " predmet";

      if (args.maximum == 2) {
        message += "a";
      } else if (args.maximum != 1) {
        message += "e";
      }

      return message;
    },
    noResults: () => "Ni zadetkov.",
    searching: () => "Iščem…",
    removeAllItems: () => "Odstranite vse elemente",
  };
});
