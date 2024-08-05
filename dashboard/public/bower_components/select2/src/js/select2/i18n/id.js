define(() => {
  // Indonesian
  return {
    errorLoading: () => "Data tidak boleh diambil.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      return "Hapuskan " + overChars + " huruf";
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      return "Masukkan " + remainingChars + " huruf lagi";
    },
    loadingMore: () => "Mengambil data…",
    maximumSelected: (args) => "Anda hanya dapat memilih " + args.maximum + " pilihan",
    noResults: () => "Tidak ada data yang sesuai",
    searching: () => "Mencari…",
    removeAllItems: () => "Hapus semua item",
  };
});
