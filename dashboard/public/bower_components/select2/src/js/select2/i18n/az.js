define(() => {
  // Azerbaijani
  return {
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      return overChars + " simvol silin";
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      return remainingChars + " simvol daxil edin";
    },
    loadingMore: () => "Daha çox nəticə yüklənir…",
    maximumSelected: (args) => "Sadəcə " + args.maximum + " element seçə bilərsiniz",
    noResults: () => "Nəticə tapılmadı",
    searching: () => "Axtarılır…",
    removeAllItems: () => "Bütün elementləri sil",
  };
});
