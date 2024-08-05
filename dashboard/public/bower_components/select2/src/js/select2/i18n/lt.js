define(() => {
  // rules from
  // http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#lt
  function ending(count, one, few, other) {
    if (count % 10 === 1 && (count % 100 < 11 || count % 100 > 19)) {
      return one;
    } else if (count % 10 >= 2 && count % 10 <= 9 && (count % 100 < 11 || count % 100 > 19)) {
      return few;
    } else {
      return other;
    }
  }

  return {
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Pašalinkite " + overChars + " simbol";

      message += ending(overChars, "į", "ius", "ių");

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Įrašykite dar " + remainingChars + " simbol";

      message += ending(remainingChars, "į", "ius", "ių");

      return message;
    },
    loadingMore: () => "Kraunama daugiau rezultatų…",
    maximumSelected: (args) => {
      var message = "Jūs galite pasirinkti tik " + args.maximum + " element";

      message += ending(args.maximum, "ą", "us", "ų");

      return message;
    },
    noResults: () => "Atitikmenų nerasta",
    searching: () => "Ieškoma…",
    removeAllItems: () => "Pašalinti visus elementus",
  };
});
