/*!
 * jQuery UI Effects Fade 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fade-effect/
 */
((factory) => {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["jquery", "./effect"], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
})(
  ($) =>
    ($.effects.effect.fade = function (o, done) {
      var el = $(this),
        mode = $.effects.setMode(el, o.mode || "toggle");

      el.animate(
        {
          opacity: mode,
        },
        {
          queue: false,
          duration: o.duration,
          easing: o.easing,
          complete: done,
        }
      );
    })
);
