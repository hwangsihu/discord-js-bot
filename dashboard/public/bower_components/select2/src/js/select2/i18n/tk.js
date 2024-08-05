define(() => {
  // Turkmen
  return {
    errorLoading: () => "Netije ýüklenmedi.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = overChars + " harp bozuň.";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Ýene-de iň az " + remainingChars + " harp ýazyň.";

      return message;
    },
    loadingMore: () => "Köpräk netije görkezilýär…",
    maximumSelected: (args) => {
      var message = "Diňe " + args.maximum + " sanysyny saýlaň.";

      return message;
    },
    noResults: () => "Netije tapylmady.",
    searching: () => "Gözlenýär…",
    removeAllItems: () => {
      // TO DO : add in turkmen,
      return "Remove all items";
    },
  };
});
