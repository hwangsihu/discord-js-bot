define(() => {
  // Spanish
  return {
    errorLoading: () => "No se pudieron cargar los resultados",
    inputTooLong: (args) => {
      var remainingChars = args.input.length - args.maximum;

      var message = "Por favor, elimine " + remainingChars + " car";

      if (remainingChars == 1) {
        message += "ácter";
      } else {
        message += "acteres";
      }

      return message;
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      var message = "Por favor, introduzca " + remainingChars + " car";

      if (remainingChars == 1) {
        message += "ácter";
      } else {
        message += "acteres";
      }

      return message;
    },
    loadingMore: () => "Cargando más resultados…",
    maximumSelected: (args) => {
      var message = "Sólo puede seleccionar " + args.maximum + " elemento";

      if (args.maximum != 1) {
        message += "s";
      }

      return message;
    },
    noResults: () => "No se encontraron resultados",
    searching: () => "Buscando…",
    removeAllItems: () => "Eliminar todos los elementos",
  };
});
