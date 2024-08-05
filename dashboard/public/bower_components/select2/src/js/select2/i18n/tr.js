define(() => {
  // Turkish
  return {
    errorLoading: () => "Sonuç yüklenemedi",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = overChars + " karakter daha girmelisiniz";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "En az " + remainingChars + " karakter daha girmelisiniz";

      return message;
    },
    loadingMore: () => "Daha fazla…",
    maximumSelected: (args) => {
      var message = "Sadece " + args.maximum + " seçim yapabilirsiniz";

      return message;
    },
    noResults: () => "Sonuç bulunamadı",
    searching: () => "Aranıyor…",
    removeAllItems: () => "Tüm öğeleri kaldır",
  };
});
