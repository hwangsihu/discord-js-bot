define(() => {
  // Galician
  return {
    errorLoading: () => "Non foi posíbel cargar os resultados.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      if (overChars === 1) {
        return "Elimine un carácter";
      }
      return "Elimine " + overChars + " caracteres";
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      if (remainingChars === 1) {
        return "Engada un carácter";
      }
      return "Engada " + remainingChars + " caracteres";
    },
    loadingMore: () => "Cargando máis resultados…",
    maximumSelected: (args) => {
      if (args.maximum === 1) {
        return "Só pode seleccionar un elemento";
      }
      return "Só pode seleccionar " + args.maximum + " elementos";
    },
    noResults: () => "Non se atoparon resultados",
    searching: () => "Buscando…",
    removeAllItems: () => "Elimina todos os elementos",
  };
});
