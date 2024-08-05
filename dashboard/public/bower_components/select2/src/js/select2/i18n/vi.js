define(() => {
  // Vietnamese
  return {
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Vui lòng xóa bớt " + overChars + " ký tự";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Vui lòng nhập thêm từ " + remainingChars + " ký tự trở lên";

      return message;
    },
    loadingMore: () => "Đang lấy thêm kết quả…",
    maximumSelected: (args) => {
      var message = "Chỉ có thể chọn được " + args.maximum + " lựa chọn";

      return message;
    },
    noResults: () => "Không tìm thấy kết quả",
    searching: () => "Đang tìm…",
    removeAllItems: () => "Xóa tất cả các mục",
  };
});
