/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/ar", [], () => ({
      errorLoading: () => "لا يمكن تحميل النتائج",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum;
        return "الرجاء حذف " + t + " عناصر";
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length;
        return "الرجاء إضافة " + t + " عناصر";
      },
      loadingMore: () => "جاري تحميل نتائج إضافية...",
      maximumSelected: (e) => "تستطيع إختيار " + e.maximum + " بنود فقط",
      noResults: () => "لم يتم العثور على أي نتائج",
      searching: () => "جاري البحث…",
      removeAllItems: () => "قم بإزالة كل العناصر",
    })),
    { define: e.define, require: e.require }
  );
})();
