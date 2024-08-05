/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/zh-TW", [], () => ({
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "請刪掉" + t + "個字元";
        return n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "請再輸入" + t + "個字元";
        return n;
      },
      loadingMore: () => "載入中…",
      maximumSelected: (e) => {
        var t = "你只能選擇最多" + e.maximum + "項";
        return t;
      },
      noResults: () => "沒有找到相符的項目",
      searching: () => "搜尋中…",
      removeAllItems: () => "刪除所有項目",
    })),
    { define: e.define, require: e.require }
  );
})();
