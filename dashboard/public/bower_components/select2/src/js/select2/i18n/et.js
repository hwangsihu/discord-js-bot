define(() => {
  // Estonian
  return {
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Sisesta " + overChars + " täht";

      if (overChars != 1) {
        message += "e";
      }

      message += " vähem";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Sisesta " + remainingChars + " täht";

      if (remainingChars != 1) {
        message += "e";
      }

      message += " rohkem";

      return message;
    },
    loadingMore: () => "Laen tulemusi…",
    maximumSelected: (args) => {
      var message = "Saad vaid " + args.maximum + " tulemus";

      if (args.maximum == 1) {
        message += "e";
      } else {
        message += "t";
      }

      message += " valida";

      return message;
    },
    noResults: () => "Tulemused puuduvad",
    searching: () => "Otsin…",
    removeAllItems: () => "Eemalda kõik esemed",
  };
});
