/*!
 * bindings/inputmask.binding.js
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2017 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 3.3.11
 */

!((factory) => {
  "function" == typeof define && define.amd
    ? define(["jquery", "../inputmask", "../global/document"], factory)
    : "object" == typeof exports
      ? (module.exports = factory(
          require("jquery"),
          require("../inputmask"),
          require("../global/document")
        ))
      : factory(jQuery, window.Inputmask, document);
})(($, Inputmask, document) => {
  $(document)
    .ajaxComplete((event, xmlHttpRequest, ajaxOptions) => {
      -1 !== $.inArray("html", ajaxOptions.dataTypes) &&
        $(".inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias]").each(
          (ndx, lmnt) => {
            void 0 === lmnt.inputmask && Inputmask().mask(lmnt);
          }
        );
    })
    .ready(() => {
      $(".inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias]").each(
        (ndx, lmnt) => {
          void 0 === lmnt.inputmask && Inputmask().mask(lmnt);
        }
      );
    });
});
