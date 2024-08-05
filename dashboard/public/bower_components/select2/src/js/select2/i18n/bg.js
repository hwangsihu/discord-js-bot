define(() => {
  // Bulgarian
  return {
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Моля въведете с " + overChars + " по-малко символ";

      if (overChars > 1) {
        message += "a";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Моля въведете още " + remainingChars + " символ";

      if (remainingChars > 1) {
        message += "a";
      }

      return message;
    },
    loadingMore: () => "Зареждат се още…",
    maximumSelected: (args) => {
      var message = "Можете да направите до " + args.maximum + " ";

      if (args.maximum > 1) {
        message += "избора";
      } else {
        message += "избор";
      }

      return message;
    },
    noResults: () => "Няма намерени съвпадения",
    searching: () => "Търсене…",
    removeAllItems: () => "Премахнете всички елементи",
  };
});
