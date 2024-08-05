/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/bn", [], () => ({
      errorLoading: () => "ফলাফলগুলি লোড করা যায়নি।",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "অনুগ্রহ করে " + t + " টি অক্ষর মুছে দিন।";
        return t != 1 && (n = "অনুগ্রহ করে " + t + " টি অক্ষর মুছে দিন।"), n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = t + " টি অক্ষর অথবা অধিক অক্ষর লিখুন।";
        return n;
      },
      loadingMore: () => "আরো ফলাফল লোড হচ্ছে ...",
      maximumSelected: (e) => {
        var t = e.maximum + " টি আইটেম নির্বাচন করতে পারবেন।";
        return e.maximum != 1 && (t = e.maximum + " টি আইটেম নির্বাচন করতে পারবেন।"), t;
      },
      noResults: () => "কোন ফলাফল পাওয়া যায়নি।",
      searching: () => "অনুসন্ধান করা হচ্ছে ...",
    })),
    { define: e.define, require: e.require }
  );
})();
