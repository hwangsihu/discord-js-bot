/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/pt", [], () => ({
      errorLoading: () => "Os resultados não puderam ser carregados.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum,
          n = "Por favor apague " + t + " ";
        return (n += t != 1 ? "caracteres" : "caractere"), n;
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length,
          n = "Introduza " + t + " ou mais caracteres";
        return n;
      },
      loadingMore: () => "A carregar mais resultados…",
      maximumSelected: (e) => {
        var t = "Apenas pode seleccionar " + e.maximum + " ";
        return (t += e.maximum != 1 ? "itens" : "item"), t;
      },
      noResults: () => "Sem resultados",
      searching: () => "A procurar…",
      removeAllItems: () => "Remover todos os itens",
    })),
    { define: e.define, require: e.require }
  );
})();
