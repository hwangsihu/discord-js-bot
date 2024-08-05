define(() => {
  // Georgian
  return {
    errorLoading: () => "მონაცემების ჩატვირთვა შეუძლებელია.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "გთხოვთ აკრიფეთ " + overChars + " სიმბოლოთი ნაკლები";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "გთხოვთ აკრიფეთ " + remainingChars + " სიმბოლო ან მეტი";

      return message;
    },
    loadingMore: () => "მონაცემების ჩატვირთვა…",
    maximumSelected: (args) => {
      var message = "თქვენ შეგიძლიათ აირჩიოთ არაუმეტეს " + args.maximum + " ელემენტი";

      return message;
    },
    noResults: () => "რეზულტატი არ მოიძებნა",
    searching: () => "ძიება…",
    removeAllItems: () => "ამოიღე ყველა ელემენტი",
  };
});
