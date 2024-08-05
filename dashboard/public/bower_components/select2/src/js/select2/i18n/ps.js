/* jslint maxlen: 87 */
define(() => {
  // Pashto (پښتو)
  return {
    errorLoading: () => "پايلي نه سي ترلاسه کېدای",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "د مهربانۍ لمخي " + overChars + " توری ړنګ کړئ";

      if (overChars != 1) {
        message = message.replace("توری", "توري");
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "لږ تر لږه " + remainingChars + " يا ډېر توري وليکئ";

      return message;
    },
    loadingMore: () => "نوري پايلي ترلاسه کيږي...",
    maximumSelected: (args) => {
      var message = "تاسو يوازي " + args.maximum + " قلم په نښه کولای سی";

      if (args.maximum != 1) {
        message = message.replace("قلم", "قلمونه");
      }

      return message;
    },
    noResults: () => "پايلي و نه موندل سوې",
    searching: () => "لټول کيږي...",
    removeAllItems: () => "ټول توکي لرې کړئ",
  };
});
