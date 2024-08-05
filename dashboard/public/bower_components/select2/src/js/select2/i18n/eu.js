define(() => {
  // Basque
  return {
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Idatzi ";

      if (overChars == 1) {
        message += "karaktere bat";
      } else {
        message += overChars + " karaktere";
      }

      message += " gutxiago";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Idatzi ";

      if (remainingChars == 1) {
        message += "karaktere bat";
      } else {
        message += remainingChars + " karaktere";
      }

      message += " gehiago";

      return message;
    },
    loadingMore: () => "Emaitza gehiago kargatzen…",
    maximumSelected: (args) => {
      if (args.maximum === 1) {
        return "Elementu bakarra hauta dezakezu";
      } else {
        return args.maximum + " elementu hauta ditzakezu soilik";
      }
    },
    noResults: () => "Ez da bat datorrenik aurkitu",
    searching: () => "Bilatzen…",
    removeAllItems: () => "Kendu elementu guztiak",
  };
});
