define(() => {
  // Bangla
  return {
    errorLoading: () => "ফলাফলগুলি লোড করা যায়নি।",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "অনুগ্রহ করে " + overChars + " টি অক্ষর মুছে দিন।";

      if (overChars != 1) {
        message = "অনুগ্রহ করে " + overChars + " টি অক্ষর মুছে দিন।";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = remainingChars + " টি অক্ষর অথবা অধিক অক্ষর লিখুন।";

      return message;
    },
    loadingMore: () => "আরো ফলাফল লোড হচ্ছে ...",
    maximumSelected: (args) => {
      var message = args.maximum + " টি আইটেম নির্বাচন করতে পারবেন।";

      if (args.maximum != 1) {
        message = args.maximum + " টি আইটেম নির্বাচন করতে পারবেন।";
      }

      return message;
    },
    noResults: () => "কোন ফলাফল পাওয়া যায়নি।",
    searching: () => "অনুসন্ধান করা হচ্ছে ...",
  };
});
