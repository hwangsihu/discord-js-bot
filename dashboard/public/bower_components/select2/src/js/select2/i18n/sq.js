define(() => {
  // Albanian
  return {
    errorLoading: () => "Rezultatet nuk mund të ngarkoheshin.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Të lutem fshi " + overChars + " karakter";

      if (overChars != 1) {
        message += "e";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Të lutem shkruaj " + remainingChars + " ose më shumë karaktere";

      return message;
    },
    loadingMore: () => "Duke ngarkuar më shumë rezultate…",
    maximumSelected: (args) => {
      var message = "Mund të zgjedhësh vetëm " + args.maximum + " element";

      if (args.maximum != 1) {
        message += "e";
      }

      return message;
    },
    noResults: () => "Nuk u gjet asnjë rezultat",
    searching: () => "Duke kërkuar…",
    removeAllItems: () => "Hiq të gjitha sendet",
  };
});
