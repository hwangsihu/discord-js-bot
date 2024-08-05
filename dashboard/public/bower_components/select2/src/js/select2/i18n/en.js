define(() => {
  // English
  return {
    errorLoading: () => "The results could not be loaded.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Please delete " + overChars + " character";

      if (overChars != 1) {
        message += "s";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Please enter " + remainingChars + " or more characters";

      return message;
    },
    loadingMore: () => "Loading more results…",
    maximumSelected: (args) => {
      var message = "You can only select " + args.maximum + " item";

      if (args.maximum != 1) {
        message += "s";
      }

      return message;
    },
    noResults: () => "No results found",
    searching: () => "Searching…",
    removeAllItems: () => "Remove all items",
  };
});
