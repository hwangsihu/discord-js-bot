/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/en", [], () => ({
      errorLoading: () => "The results could not be loaded.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "Please delete " + t + " character";
        return t != 1 && (n += "s"), n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "Please enter " + t + " or more characters";
        return n;
      },
      loadingMore: () => "Loading more results…",
      maximumSelected: (e) => {
        var t = "You can only select " + e.maximum + " item";
        return e.maximum != 1 && (t += "s"), t;
      },
      noResults: () => "No results found",
      searching: () => "Searching…",
      removeAllItems: () => "Remove all items",
    })),
    { define: e.define, require: e.require }
  );
})();
