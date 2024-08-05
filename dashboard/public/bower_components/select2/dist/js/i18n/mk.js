/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/mk", [], () => ({
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "Ве молиме внесете " + e.maximum + " помалку карактер";
        return e.maximum !== 1 && (n += "и"), n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "Ве молиме внесете уште " + e.maximum + " карактер";
        return e.maximum !== 1 && (n += "и"), n;
      },
      loadingMore: () => "Вчитување резултати…",
      maximumSelected: (e) => {
        var t = "Можете да изберете само " + e.maximum + " ставк";
        return e.maximum === 1 ? (t += "а") : (t += "и"), t;
      },
      noResults: () => "Нема пронајдено совпаѓања",
      searching: () => "Пребарување…",
      removeAllItems: () => "Отстрани ги сите предмети",
    })),
    { define: e.define, require: e.require }
  );
})();
