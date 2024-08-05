/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/fa", [], () => ({
      errorLoading: () => "امکان بارگذاری نتایج وجود ندارد.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "لطفاً " + t + " کاراکتر را حذف نمایید";
        return n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "لطفاً تعداد " + t + " کاراکتر یا بیشتر وارد نمایید";
        return n;
      },
      loadingMore: () => "در حال بارگذاری نتایج بیشتر...",
      maximumSelected: (e) => {
        var t = "شما تنها می‌توانید " + e.maximum + " آیتم را انتخاب نمایید";
        return t;
      },
      noResults: () => "هیچ نتیجه‌ای یافت نشد",
      searching: () => "در حال جستجو...",
      removeAllItems: () => "همه موارد را حذف کنید",
    })),
    { define: e.define, require: e.require }
  );
})();
