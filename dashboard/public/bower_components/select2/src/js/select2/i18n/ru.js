define(() => {
  // Russian
  function ending(count, one, couple, more) {
    if ((count % 10 < 5 && count % 10 > 0 && count % 100 < 5) || count % 100 > 20) {
      if (count % 10 > 1) {
        return couple;
      }
    } else {
      return more;
    }

    return one;
  }

  return {
    errorLoading: () => "Невозможно загрузить результаты",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Пожалуйста, введите на " + overChars + " символ";

      message += ending(overChars, "", "a", "ов");

      message += " меньше";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Пожалуйста, введите ещё хотя бы " + remainingChars + " символ";

      message += ending(remainingChars, "", "a", "ов");

      return message;
    },
    loadingMore: () => "Загрузка данных…",
    maximumSelected: (args) => {
      var message = "Вы можете выбрать не более " + args.maximum + " элемент";

      message += ending(args.maximum, "", "a", "ов");

      return message;
    },
    noResults: () => "Совпадений не найдено",
    searching: () => "Поиск…",
    removeAllItems: () => "Удалить все элементы",
  };
});
