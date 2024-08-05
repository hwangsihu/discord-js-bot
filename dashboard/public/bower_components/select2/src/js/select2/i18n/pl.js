define(() => {
  // Polish
  var charsWords = ["znak", "znaki", "znaków"];
  var itemsWords = ["element", "elementy", "elementów"];

  var pluralWord = function pluralWord(numberOfChars, words) {
    if (numberOfChars === 1) {
      return words[0];
    } else if (numberOfChars > 1 && numberOfChars <= 4) {
      return words[1];
    } else if (numberOfChars >= 5) {
      return words[2];
    }
  };

  return {
    errorLoading: () => "Nie można załadować wyników.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      return "Usuń " + overChars + " " + pluralWord(overChars, charsWords);
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      return "Podaj przynajmniej " + remainingChars + " " + pluralWord(remainingChars, charsWords);
    },
    loadingMore: () => "Trwa ładowanie…",
    maximumSelected: (args) =>
      "Możesz zaznaczyć tylko " + args.maximum + " " + pluralWord(args.maximum, itemsWords),
    noResults: () => "Brak wyników",
    searching: () => "Trwa wyszukiwanie…",
    removeAllItems: () => "Usuń wszystkie przedmioty",
  };
});
