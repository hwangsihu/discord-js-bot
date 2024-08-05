/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/uk", [], () => {
      function e(e, t, n, r) {
        return e % 100 > 10 && e % 100 < 15
          ? r
          : e % 10 === 1
            ? t
            : e % 10 > 1 && e % 10 < 5
              ? n
              : r;
      }
      return {
        errorLoading: () => "Неможливо завантажити результати",
        inputTooLong: (t) => {
          var n = t.input.length - t.maximum;
          return "Будь ласка, видаліть " + n + " " + e(t.maximum, "літеру", "літери", "літер");
        },
        inputTooShort: (e) => {
          var t = e.minimum - e.input.length;
          return "Будь ласка, введіть " + t + " або більше літер";
        },
        loadingMore: () => "Завантаження інших результатів…",
        maximumSelected: (t) =>
          "Ви можете вибрати лише " + t.maximum + " " + e(t.maximum, "пункт", "пункти", "пунктів"),
        noResults: () => "Нічого не знайдено",
        searching: () => "Пошук…",
        removeAllItems: () => "Видалити всі елементи",
      };
    }),
    { define: e.define, require: e.require }
  );
})();
