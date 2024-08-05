/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/tr", [], () => ({
      errorLoading: () => "Sonuç yüklenemedi",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = t + " karakter daha girmelisiniz";
        return n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "En az " + t + " karakter daha girmelisiniz";
        return n;
      },
      loadingMore: () => "Daha fazla…",
      maximumSelected: (e) => {
        var t = "Sadece " + e.maximum + " seçim yapabilirsiniz";
        return t;
      },
      noResults: () => "Sonuç bulunamadı",
      searching: () => "Aranıyor…",
      removeAllItems: () => "Tüm öğeleri kaldır",
    })),
    { define: e.define, require: e.require }
  );
})();
