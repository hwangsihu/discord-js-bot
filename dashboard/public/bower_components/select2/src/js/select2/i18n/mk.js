define(() => {
  // Macedonian
  return {
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Ве молиме внесете " + args.maximum + " помалку карактер";

      if (args.maximum !== 1) {
        message += "и";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Ве молиме внесете уште " + args.maximum + " карактер";

      if (args.maximum !== 1) {
        message += "и";
      }

      return message;
    },
    loadingMore: () => "Вчитување резултати…",
    maximumSelected: (args) => {
      var message = "Можете да изберете само " + args.maximum + " ставк";

      if (args.maximum === 1) {
        message += "а";
      } else {
        message += "и";
      }

      return message;
    },
    noResults: () => "Нема пронајдено совпаѓања",
    searching: () => "Пребарување…",
    removeAllItems: () => "Отстрани ги сите предмети",
  };
});
