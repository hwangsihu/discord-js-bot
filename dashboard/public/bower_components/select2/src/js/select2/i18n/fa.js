/* jshint -W100 */
/* jslint maxlen: 86 */
define(() => {
  // Farsi (Persian)
  return {
    errorLoading: () => "امکان بارگذاری نتایج وجود ندارد.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "لطفاً " + overChars + " کاراکتر را حذف نمایید";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "لطفاً تعداد " + remainingChars + " کاراکتر یا بیشتر وارد نمایید";

      return message;
    },
    loadingMore: () => "در حال بارگذاری نتایج بیشتر...",
    maximumSelected: (args) => {
      var message = "شما تنها می‌توانید " + args.maximum + " آیتم را انتخاب نمایید";

      return message;
    },
    noResults: () => "هیچ نتیجه‌ای یافت نشد",
    searching: () => "در حال جستجو...",
    removeAllItems: () => "همه موارد را حذف کنید",
  };
});
