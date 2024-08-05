/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/bg", [], () => ({
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "Моля въведете с " + t + " по-малко символ";
        return t > 1 && (n += "a"), n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "Моля въведете още " + t + " символ";
        return t > 1 && (n += "a"), n;
      },
      loadingMore: () => "Зареждат се още…",
      maximumSelected: (e) => {
        var t = "Можете да направите до " + e.maximum + " ";
        return e.maximum > 1 ? (t += "избора") : (t += "избор"), t;
      },
      noResults: () => "Няма намерени съвпадения",
      searching: () => "Търсене…",
      removeAllItems: () => "Премахнете всички елементи",
    })),
    { define: e.define, require: e.require }
  );
})();
