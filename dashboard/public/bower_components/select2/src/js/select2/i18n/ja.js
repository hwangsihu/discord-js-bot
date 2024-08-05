define(() => {
  // Japanese
  return {
    errorLoading: () => "結果が読み込まれませんでした",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = overChars + " 文字を削除してください";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "少なくとも " + remainingChars + " 文字を入力してください";

      return message;
    },
    loadingMore: () => "読み込み中…",
    maximumSelected: (args) => {
      var message = args.maximum + " 件しか選択できません";

      return message;
    },
    noResults: () => "対象が見つかりません",
    searching: () => "検索しています…",
    removeAllItems: () => "すべてのアイテムを削除",
  };
});
