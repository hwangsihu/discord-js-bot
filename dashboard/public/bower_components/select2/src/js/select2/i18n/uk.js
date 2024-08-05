define(() => {
  // Ukranian
  function ending(count, one, couple, more) {
    if (count % 100 > 10 && count % 100 < 15) {
      return more;
    }
    if (count % 10 === 1) {
      return one;
    }
    if (count % 10 > 1 && count % 10 < 5) {
      return couple;
    }
    return more;
  }

  return {
    errorLoading: () => "Неможливо завантажити результати",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;
      return (
        "Будь ласка, видаліть " +
        overChars +
        " " +
        ending(args.maximum, "літеру", "літери", "літер")
      );
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;
      return "Будь ласка, введіть " + remainingChars + " або більше літер";
    },
    loadingMore: () => "Завантаження інших результатів…",
    maximumSelected: (args) =>
      "Ви можете вибрати лише " +
      args.maximum +
      " " +
      ending(args.maximum, "пункт", "пункти", "пунктів"),
    noResults: () => "Нічого не знайдено",
    searching: () => "Пошук…",
    removeAllItems: () => "Видалити всі елементи",
  };
});
