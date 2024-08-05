define(() => {
  // Romanian
  return {
    errorLoading: () => "Rezultatele nu au putut fi incărcate.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Vă rugăm să ștergeți" + overChars + " caracter";

      if (overChars !== 1) {
        message += "e";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Vă rugăm să introduceți " + remainingChars + " sau mai multe caractere";

      return message;
    },
    loadingMore: () => "Se încarcă mai multe rezultate…",
    maximumSelected: (args) => {
      var message = "Aveți voie să selectați cel mult " + args.maximum;
      message += " element";

      if (args.maximum !== 1) {
        message += "e";
      }

      return message;
    },
    noResults: () => "Nu au fost găsite rezultate",
    searching: () => "Căutare…",
    removeAllItems: () => "Eliminați toate elementele",
  };
});
