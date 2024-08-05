/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/id", [], () => ({
      errorLoading: () => "Data tidak boleh diambil.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum;
        return "Hapuskan " + t + " huruf";
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length;
        return "Masukkan " + t + " huruf lagi";
      },
      loadingMore: () => "Mengambil data…",
      maximumSelected: (e) => "Anda hanya dapat memilih " + e.maximum + " pilihan",
      noResults: () => "Tidak ada data yang sesuai",
      searching: () => "Mencari…",
      removeAllItems: () => "Hapus semua item",
    })),
    { define: e.define, require: e.require }
  );
})();
