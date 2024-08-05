define(() => {
  // Brazilian Portuguese
  return {
    errorLoading: () => "Os resultados não puderam ser carregados.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      var message = "Apague " + overChars + " caracter";

      if (overChars != 1) {
        message += "es";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Digite " + remainingChars + " ou mais caracteres";

      return message;
    },
    loadingMore: () => "Carregando mais resultados…",
    maximumSelected: (args) => {
      var message = "Você só pode selecionar " + args.maximum + " ite";

      if (args.maximum == 1) {
        message += "m";
      } else {
        message += "ns";
      }

      return message;
    },
    noResults: () => "Nenhum resultado encontrado",
    searching: () => "Buscando…",
    removeAllItems: () => "Remover todos os itens",
  };
});
