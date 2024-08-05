define(() => {
  // Greek (el)
  return {
    errorLoading: () => "Τα αποτελέσματα δεν μπόρεσαν να φορτώσουν.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Παρακαλώ διαγράψτε " + overChars + " χαρακτήρ";

      if (overChars == 1) {
        message += "α";
      }
      if (overChars != 1) {
        message += "ες";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Παρακαλώ συμπληρώστε " + remainingChars + " ή περισσότερους χαρακτήρες";

      return message;
    },
    loadingMore: () => "Φόρτωση περισσότερων αποτελεσμάτων…",
    maximumSelected: (args) => {
      var message = "Μπορείτε να επιλέξετε μόνο " + args.maximum + " επιλογ";

      if (args.maximum == 1) {
        message += "ή";
      }

      if (args.maximum != 1) {
        message += "ές";
      }

      return message;
    },
    noResults: () => "Δεν βρέθηκαν αποτελέσματα",
    searching: () => "Αναζήτηση…",
    removeAllItems: () => "Καταργήστε όλα τα στοιχεία",
  };
});
