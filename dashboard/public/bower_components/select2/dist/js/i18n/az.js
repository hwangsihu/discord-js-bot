/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/az", [], () => ({
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum;
        return t + " simvol silin";
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length;
        return t + " simvol daxil edin";
      },
      loadingMore: () => "Daha çox nəticə yüklənir…",
      maximumSelected: (e) => "Sadəcə " + e.maximum + " element seçə bilərsiniz",
      noResults: () => "Nəticə tapılmadı",
      searching: () => "Axtarılır…",
      removeAllItems: () => "Bütün elementləri sil",
    })),
    { define: e.define, require: e.require }
  );
})();
