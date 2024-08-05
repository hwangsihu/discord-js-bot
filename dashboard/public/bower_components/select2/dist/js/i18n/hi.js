/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/hi", [], () => ({
      errorLoading: () => "परिणामों को लोड नहीं किया जा सका।",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = t + " अक्षर को हटा दें";
        return t > 1 && (n = t + " अक्षरों को हटा दें "), n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "कृपया " + t + " या अधिक अक्षर दर्ज करें";
        return n;
      },
      loadingMore: () => "अधिक परिणाम लोड हो रहे है...",
      maximumSelected: (e) => {
        var t = "आप केवल " + e.maximum + " आइटम का चयन कर सकते हैं";
        return t;
      },
      noResults: () => "कोई परिणाम नहीं मिला",
      searching: () => "खोज रहा है...",
      removeAllItems: () => "सभी वस्तुओं को हटा दें",
    })),
    { define: e.define, require: e.require }
  );
})();
