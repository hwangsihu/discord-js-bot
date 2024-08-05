/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/vi", [], () => ({
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "Vui lòng xóa bớt " + t + " ký tự";
        return n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "Vui lòng nhập thêm từ " + t + " ký tự trở lên";
        return n;
      },
      loadingMore: () => "Đang lấy thêm kết quả…",
      maximumSelected: (e) => {
        var t = "Chỉ có thể chọn được " + e.maximum + " lựa chọn";
        return t;
      },
      noResults: () => "Không tìm thấy kết quả",
      searching: () => "Đang tìm…",
      removeAllItems: () => "Xóa tất cả các mục",
    })),
    { define: e.define, require: e.require }
  );
})();
