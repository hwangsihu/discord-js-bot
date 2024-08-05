define(() => {
  // Upper Sorbian
  var charsWords = ["znamješko", "znamješce", "znamješka", "znamješkow"];
  var itemsWords = ["zapisk", "zapiskaj", "zapiski", "zapiskow"];

  var pluralWord = function pluralWord(numberOfChars, words) {
    if (numberOfChars === 1) {
      return words[0];
    } else if (numberOfChars === 2) {
      return words[1];
    } else if (numberOfChars > 2 && numberOfChars <= 4) {
      return words[2];
    } else if (numberOfChars >= 5) {
      return words[3];
    }
  };

  return {
    errorLoading: () => "Wuslědki njedachu so začitać.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      return "Prošu zhašej " + overChars + " " + pluralWord(overChars, charsWords);
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      return (
        "Prošu zapodaj znajmjeńša " + remainingChars + " " + pluralWord(remainingChars, charsWords)
      );
    },
    loadingMore: () => "Dalše wuslědki so začitaja…",
    maximumSelected: (args) =>
      "Móžeš jenož " + args.maximum + " " + pluralWord(args.maximum, itemsWords) + "wubrać",
    noResults: () => "Žane wuslědki namakane",
    searching: () => "Pyta so…",
    removeAllItems: () => {
      // To DO : in Upper Sorbian.
      return "Remove all items";
    },
  };
});
