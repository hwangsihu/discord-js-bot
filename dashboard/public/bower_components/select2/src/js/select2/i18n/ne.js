define(() => {
  // Nepali
  return {
    errorLoading: () => "नतिजाहरु देखाउन सकिएन।",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "कृपया " + overChars + " अक्षर मेटाउनुहोस्।";

      if (overChars != 1) {
        message += "कृपया " + overChars + " अक्षरहरु मेटाउनुहोस्।";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "कृपया बाँकी रहेका " + remainingChars + " वा अरु धेरै अक्षरहरु भर्नुहोस्।";

      return message;
    },
    loadingMore: () => "अरु नतिजाहरु भरिँदैछन् …",
    maximumSelected: (args) => {
      var message = "तँपाई " + args.maximum + " वस्तु मात्र छान्न पाउँनुहुन्छ।";

      if (args.maximum != 1) {
        message = "तँपाई " + args.maximum + " वस्तुहरु मात्र छान्न पाउँनुहुन्छ।";
      }

      return message;
    },
    noResults: () => "कुनै पनि नतिजा भेटिएन।",
    searching: () => "खोजि हुँदैछ…",
  };
});
