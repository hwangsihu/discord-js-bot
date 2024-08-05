/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/km", [], () => ({
      errorLoading: () => "មិនអាចទាញយកទិន្នន័យ",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "សូមលុបចេញ  " + t + " អក្សរ";
        return n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "សូមបញ្ចូល" + t + " អក្សរ រឺ ច្រើនជាងនេះ";
        return n;
      },
      loadingMore: () => "កំពុងទាញយកទិន្នន័យបន្ថែម...",
      maximumSelected: (e) => {
        var t = "អ្នកអាចជ្រើសរើសបានតែ " + e.maximum + " ជម្រើសប៉ុណ្ណោះ";
        return t;
      },
      noResults: () => "មិនមានលទ្ធផល",
      searching: () => "កំពុងស្វែងរក...",
      removeAllItems: () => "លុបធាតុទាំងអស់",
    })),
    { define: e.define, require: e.require }
  );
})();
