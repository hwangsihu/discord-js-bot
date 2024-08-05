/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/ja", [], () => ({
      errorLoading: () => "結果が読み込まれませんでした",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = t + " 文字を削除してください";
        return n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "少なくとも " + t + " 文字を入力してください";
        return n;
      },
      loadingMore: () => "読み込み中…",
      maximumSelected: (e) => {
        var t = e.maximum + " 件しか選択できません";
        return t;
      },
      noResults: () => "対象が見つかりません",
      searching: () => "検索しています…",
      removeAllItems: () => "すべてのアイテムを削除",
    })),
    { define: e.define, require: e.require }
  );
})();
