define(() => {
  // Chinese (Traditional)
  return {
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "請刪掉" + overChars + "個字元";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "請再輸入" + remainingChars + "個字元";

      return message;
    },
    loadingMore: () => "載入中…",
    maximumSelected: (args) => {
      var message = "你只能選擇最多" + args.maximum + "項";

      return message;
    },
    noResults: () => "沒有找到相符的項目",
    searching: () => "搜尋中…",
    removeAllItems: () => "刪除所有項目",
  };
});
