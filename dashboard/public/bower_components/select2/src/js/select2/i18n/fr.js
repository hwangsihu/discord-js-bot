define(() => {
  // French
  return {
    errorLoading: () => "Les résultats ne peuvent pas être chargés.",
    inputTooLong: (args) => {
      var overChars = args.input.length - args.maximum;

      return "Supprimez " + overChars + " caractère" + (overChars > 1 ? "s" : "");
    },
    inputTooShort: (args) => {
      var remainingChars = args.minimum - args.input.length;

      return (
        "Saisissez au moins " + remainingChars + " caractère" + (remainingChars > 1 ? "s" : "")
      );
    },
    loadingMore: () => "Chargement de résultats supplémentaires…",
    maximumSelected: (args) =>
      "Vous pouvez seulement sélectionner " +
      args.maximum +
      " élément" +
      (args.maximum > 1 ? "s" : ""),
    noResults: () => "Aucun résultat trouvé",
    searching: () => "Recherche en cours…",
    removeAllItems: () => "Supprimer tous les articles",
  };
});
