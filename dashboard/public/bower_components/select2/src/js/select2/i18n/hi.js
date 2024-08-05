define(() => {
  // Hindi
  return {
    errorLoading: () => "परिणामों को लोड नहीं किया जा सका।",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = overChars + " अक्षर को हटा दें";

      if (overChars > 1) {
        message = overChars + " अक्षरों को हटा दें ";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "कृपया " + remainingChars + " या अधिक अक्षर दर्ज करें";

      return message;
    },
    loadingMore: () => "अधिक परिणाम लोड हो रहे है...",
    maximumSelected: (args) => {
      var message = "आप केवल " + args.maximum + " आइटम का चयन कर सकते हैं";
      return message;
    },
    noResults: () => "कोई परिणाम नहीं मिला",
    searching: () => "खोज रहा है...",
    removeAllItems: () => "सभी वस्तुओं को हटा दें",
  };
});
