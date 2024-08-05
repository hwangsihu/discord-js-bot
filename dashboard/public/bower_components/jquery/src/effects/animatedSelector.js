define(["../core", "../selector", "../effects"], (jQuery) => {
  jQuery.expr.pseudos.animated = (elem) =>
    jQuery.grep(jQuery.timers, (fn) => elem === fn.elem).length;
});
