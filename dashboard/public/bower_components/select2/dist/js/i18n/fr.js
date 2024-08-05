/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(() => {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
    var e = jQuery.fn.select2.amd;
  return (
    e.define("select2/i18n/fr", [], () => ({
      errorLoading: () => "Les résultats ne peuvent pas être chargés.",
      inputTooLong: (e) => {
        var t = e.input.length - e.maximum;
        return "Supprimez " + t + " caractère" + (t > 1 ? "s" : "");
      },
      inputTooShort: (e) => {
        var t = e.minimum - e.input.length;
        return "Saisissez au moins " + t + " caractère" + (t > 1 ? "s" : "");
      },
      loadingMore: () => "Chargement de résultats supplémentaires…",
      maximumSelected: (e) =>
        "Vous pouvez seulement sélectionner " + e.maximum + " élément" + (e.maximum > 1 ? "s" : ""),
      noResults: () => "Aucun résultat trouvé",
      searching: () => "Recherche en cours…",
      removeAllItems: () => "Supprimer tous les articles",
    })),
    { define: e.define, require: e.require }
  );
})();
