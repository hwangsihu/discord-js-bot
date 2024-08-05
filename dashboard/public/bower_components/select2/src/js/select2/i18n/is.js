define(() => {
  // Icelandic
  return {
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Vinsamlegast styttið texta um " + overChars + " staf";

      if (overChars <= 1) {
        return message;
      }

      return message + "i";
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Vinsamlegast skrifið " + remainingChars + " staf";

      if (remainingChars > 1) {
        message += "i";
      }

      message += " í viðbót";

      return message;
    },
    loadingMore: () => "Sæki fleiri niðurstöður…",
    maximumSelected: (args) => "Þú getur aðeins valið " + args.maximum + " atriði",
    noResults: () => "Ekkert fannst",
    searching: () => "Leita…",
    removeAllItems: () => "Fjarlægðu öll atriði",
  };
});
