define(() => {
  // Malay
  return {
    errorLoading: () => "Keputusan tidak berjaya dimuatkan.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      return "Sila hapuskan " + overChars + " aksara";
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      return "Sila masukkan " + remainingChars + " atau lebih aksara";
    },
    loadingMore: () => "Sedang memuatkan keputusan…",
    maximumSelected: (args) => "Anda hanya boleh memilih " + args.maximum + " pilihan",
    noResults: () => "Tiada padanan yang ditemui",
    searching: () => "Mencari…",
    removeAllItems: () => "Keluarkan semua item",
  };
});
