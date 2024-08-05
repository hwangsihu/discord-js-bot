/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/zh-CN", [], () => ({
      errorLoading: () => "无法载入结果。",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "请删除" + t + "个字符";
        return n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "请再输入至少" + t + "个字符";
        return n;
      },
      loadingMore: () => "载入更多结果…",
      maximumSelected: (e) => {
        var t = "最多只能选择" + e.maximum + "个项目";
        return t;
      },
      noResults: () => "未找到结果",
      searching: () => "搜索中…",
      removeAllItems: () => "删除所有项目",
    })),
    { define: e.define, require: e.require }
  );
})();
