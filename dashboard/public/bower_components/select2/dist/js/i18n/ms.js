/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/ms", [], () => ({
      errorLoading: () => "Keputusan tidak berjaya dimuatkan.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum;
        return "Sila hapuskan " + t + " aksara";
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length;
        return "Sila masukkan " + t + " atau lebih aksara";
      },
      loadingMore: () => "Sedang memuatkan keputusan…",
      maximumSelected: (e) => "Anda hanya boleh memilih " + e.maximum + " pilihan",
      noResults: () => "Tiada padanan yang ditemui",
      searching: () => "Mencari…",
      removeAllItems: () => "Keluarkan semua item",
    })),
    { define: e.define, require: e.require }
  );
})();
