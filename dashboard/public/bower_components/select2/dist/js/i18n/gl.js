/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/gl", [], () => ({
      errorLoading: () => "Non foi posíbel cargar os resultados.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum;
        return t === 1 ? "Elimine un carácter" : "Elimine " + t + " caracteres";
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length;
        return t === 1 ? "Engada un carácter" : "Engada " + t + " caracteres";
      },
      loadingMore: () => "Cargando máis resultados…",
      maximumSelected: (e) =>
        e.maximum === 1
          ? "Só pode seleccionar un elemento"
          : "Só pode seleccionar " + e.maximum + " elementos",
      noResults: () => "Non se atoparon resultados",
      searching: () => "Buscando…",
      removeAllItems: () => "Elimina todos os elementos",
    })),
    { define: e.define, require: e.require }
  );
})();
