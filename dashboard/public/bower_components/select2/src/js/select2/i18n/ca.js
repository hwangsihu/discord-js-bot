define(() => {
  // Catalan
  return {
    errorLoading: () => "La càrrega ha fallat",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Si us plau, elimina " + overChars + " car";

      if (overChars == 1) {
        message += "àcter";
      } else {
        message += "àcters";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Si us plau, introdueix " + remainingChars + " car";

      if (remainingChars == 1) {
        message += "àcter";
      } else {
        message += "àcters";
      }

      return message;
    },
    loadingMore: () => "Carregant més resultats…",
    maximumSelected: (args) => {
      var message = "Només es pot seleccionar " + args.maximum + " element";

      if (args.maximum != 1) {
        message += "s";
      }

      return message;
    },
    noResults: () => "No s'han trobat resultats",
    searching: () => "Cercant…",
    removeAllItems: () => "Treu tots els elements",
  };
});
