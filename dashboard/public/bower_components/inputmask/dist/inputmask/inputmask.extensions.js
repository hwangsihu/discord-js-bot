/*!
 * inputmask.extensions.js
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2017 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 3.3.11
 */

!((factory) => {
  "function" == typeof define && define.amd
    ? define(["./dependencyLibs/inputmask.dependencyLib", "./inputmask"], factory)
    : "object" == typeof exports
      ? (module.exports = factory(
          require("./dependencyLibs/inputmask.dependencyLib"),
          require("./inputmask")
        ))
      : factory(window.dependencyLib || jQuery, window.Inputmask);
})(
  ($, Inputmask) => (
    Inputmask.extendDefinitions({
      A: {
        validator: "[A-Za-zА-яЁёÀ-ÿµ]",
        cardinality: 1,
        casing: "upper",
      },
      "&": {
        validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
        cardinality: 1,
        casing: "upper",
      },
      "#": {
        validator: "[0-9A-Fa-f]",
        cardinality: 1,
        casing: "upper",
      },
    }),
    Inputmask.extendAliases({
      url: {
        definitions: {
          i: {
            validator: ".",
            cardinality: 1,
          },
        },
        mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
        insertMode: !1,
        autoUnmask: !1,
        inputmode: "url",
      },
      ip: {
        mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
        definitions: {
          i: {
            validator: (chrs, maskset, pos, strict, opts) => (
              pos - 1 > -1 && "." !== maskset.buffer[pos - 1]
                ? ((chrs = maskset.buffer[pos - 1] + chrs),
                  (chrs =
                    pos - 2 > -1 && "." !== maskset.buffer[pos - 2]
                      ? maskset.buffer[pos - 2] + chrs
                      : "0" + chrs))
                : (chrs = "00" + chrs),
              /25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/.test(chrs)
            ),
            cardinality: 1,
          },
        },
        onUnMask: (maskedValue, unmaskedValue, opts) => maskedValue,
        inputmode: "numeric",
      },
      email: {
        mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
        greedy: !1,
        onBeforePaste: (pastedValue, opts) =>
          (pastedValue = pastedValue.toLowerCase()).replace("mailto:", ""),
        definitions: {
          "*": {
            validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
            cardinality: 1,
            casing: "lower",
          },
          "-": {
            validator: "[0-9A-Za-z-]",
            cardinality: 1,
            casing: "lower",
          },
        },
        onUnMask: (maskedValue, unmaskedValue, opts) => maskedValue,
        inputmode: "email",
      },
      mac: {
        mask: "##:##:##:##:##:##",
      },
      vin: {
        mask: "V{13}9{4}",
        definitions: {
          V: {
            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
            cardinality: 1,
            casing: "upper",
          },
        },
        clearIncomplete: !0,
        autoUnmask: !0,
      },
    }),
    Inputmask
  )
);
