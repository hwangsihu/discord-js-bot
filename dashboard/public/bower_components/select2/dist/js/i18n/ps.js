/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/ps", [], () => ({
      errorLoading: () => "پايلي نه سي ترلاسه کېدای",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "د مهربانۍ لمخي " + t + " توری ړنګ کړئ";
        return t != 1 && (n = n.replace("توری", "توري")), n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "لږ تر لږه " + t + " يا ډېر توري وليکئ";
        return n;
      },
      loadingMore: () => "نوري پايلي ترلاسه کيږي...",
      maximumSelected: (e) => {
        var t = "تاسو يوازي " + e.maximum + " قلم په نښه کولای سی";
        return e.maximum != 1 && (t = t.replace("قلم", "قلمونه")), t;
      },
      noResults: () => "پايلي و نه موندل سوې",
      searching: () => "لټول کيږي...",
      removeAllItems: () => "ټول توکي لرې کړئ",
    })),
    { define: e.define, require: e.require }
  );
})();
