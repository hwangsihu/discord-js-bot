define(() => {
  // European Portuguese
  return {
    errorLoading: () => "Os resultados não puderam ser carregados.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Por favor apague " + overChars + " ";

      message += overChars != 1 ? "caracteres" : "caractere";

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Introduza " + remainingChars + " ou mais caracteres";

      return message;
    },
    loadingMore: () => "A carregar mais resultados…",
    maximumSelected: (args) => {
      var message = "Apenas pode seleccionar " + args.maximum + " ";

      message += args.maximum != 1 ? "itens" : "item";

      return message;
    },
    noResults: () => "Sem resultados",
    searching: () => "A procurar…",
    removeAllItems: () => "Remover todos os itens",
  };
});
