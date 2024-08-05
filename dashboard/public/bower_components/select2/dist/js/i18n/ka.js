/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/ka", [], () => ({
      errorLoading: () => "მონაცემების ჩატვირთვა შეუძლებელია.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "გთხოვთ აკრიფეთ " + t + " სიმბოლოთი ნაკლები";
        return n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "გთხოვთ აკრიფეთ " + t + " სიმბოლო ან მეტი";
        return n;
      },
      loadingMore: () => "მონაცემების ჩატვირთვა…",
      maximumSelected: (e) => {
        var t = "თქვენ შეგიძლიათ აირჩიოთ არაუმეტეს " + e.maximum + " ელემენტი";
        return t;
      },
      noResults: () => "რეზულტატი არ მოიძებნა",
      searching: () => "ძიება…",
      removeAllItems: () => "ამოიღე ყველა ელემენტი",
    })),
    { define: e.define, require: e.require }
  );
})();
