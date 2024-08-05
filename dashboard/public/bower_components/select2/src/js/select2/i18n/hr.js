define(() => {
  // Croatian
  function character(n) {
    var message = " " + n + " znak";

    if (n % 10 < 5 && n % 10 > 0 && (n % 100 < 5 || n % 100 > 19)) {
      if (n % 10 > 1) {
        message += "a";
      }
    } else {
      message += "ova";
    }

    return message;
  }

  return {
    errorLoading: () => "Preuzimanje nije uspjelo.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      return "Unesite " + character(overChars);
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      return "Unesite još " + character(remainingChars);
    },
    loadingMore: () => "Učitavanje rezultata…",
    maximumSelected: (args) => "Maksimalan broj odabranih stavki je " + args.maximum,
    noResults: () => "Nema rezultata",
    searching: () => "Pretraga…",
    removeAllItems: () => "Ukloni sve stavke",
  };
});
