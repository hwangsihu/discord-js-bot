define(() => {
  // Chinese (Simplified)
  return {
    errorLoading: () => "无法载入结果。",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "请删除" + overChars + "个字符";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "请再输入至少" + remainingChars + "个字符";

      return message;
    },
    loadingMore: () => "载入更多结果…",
    maximumSelected: (args) => {
      var message = "最多只能选择" + args.maximum + "个项目";

      return message;
    },
    noResults: () => "未找到结果",
    searching: () => "搜索中…",
    removeAllItems: () => "删除所有项目",
  };
});
