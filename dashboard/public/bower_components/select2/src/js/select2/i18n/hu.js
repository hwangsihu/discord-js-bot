define(() => {
  // Hungarian
  return {
    errorLoading: () => "Az eredmények betöltése nem sikerült.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      return "Túl hosszú. " + overChars + " karakterrel több, mint kellene.";
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      return "Túl rövid. Még " + remainingChars + " karakter hiányzik.";
    },
    loadingMore: () => "Töltés…",
    maximumSelected: (args) => "Csak " + args.maximum + " elemet lehet kiválasztani.",
    noResults: () => "Nincs találat.",
    searching: () => "Keresés…",
    removeAllItems: () => "Távolítson el minden elemet",
  };
});
