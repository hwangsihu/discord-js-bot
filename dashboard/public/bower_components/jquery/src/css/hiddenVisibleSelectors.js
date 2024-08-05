define(["../core", "../selector"], (jQuery) => {
  jQuery.expr.pseudos.hidden = (elem) => !jQuery.expr.pseudos.visible(elem);
  jQuery.expr.pseudos.visible = (elem) =>
    !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
});
