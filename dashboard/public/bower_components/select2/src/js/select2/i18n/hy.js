define(() => {
  // Armenian
  return {
    errorLoading: () => "Արդյունքները հնարավոր չէ բեռնել։",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Խնդրում ենք հեռացնել " + overChars + " նշան";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Խնդրում ենք մուտքագրել " + remainingChars + " կամ ավել նշաններ";

      return message;
    },
    loadingMore: () => "Բեռնվում են նոր արդյունքներ․․․",
    maximumSelected: (args) => {
      var message = "Դուք կարող եք ընտրել առավելագույնը " + args.maximum + " կետ";

      return message;
    },
    noResults: () => "Արդյունքներ չեն գտնվել",
    searching: () => "Որոնում․․․",
    removeAllItems: () => "Հեռացնել բոլոր տարրերը",
  };
});
