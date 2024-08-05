/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/ro", [], () => ({
      errorLoading: () => "Rezultatele nu au putut fi incărcate.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "Vă rugăm să ștergeți" + t + " caracter";
        return t !== 1 && (n += "e"), n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "Vă rugăm să introduceți " + t + " sau mai multe caractere";
        return n;
      },
      loadingMore: () => "Se încarcă mai multe rezultate…",
      maximumSelected: (e) => {
        var t = "Aveți voie să selectați cel mult " + e.maximum;
        return (t += " element"), e.maximum !== 1 && (t += "e"), t;
      },
      noResults: () => "Nu au fost găsite rezultate",
      searching: () => "Căutare…",
      removeAllItems: () => "Eliminați toate elementele",
    })),
    { define: e.define, require: e.require }
  );
})();
