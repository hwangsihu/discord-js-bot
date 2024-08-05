/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(() => {
  CKEDITOR.plugins.add("embed", {
    icons: "embed",
    hidpi: !0,
    requires: "embedbase",
    init: (b) => {
      var c = CKEDITOR.plugins.embedBase.createWidgetBaseDefinition(b);
      b.config.embed_provider || CKEDITOR.error("embed-no-provider-url");
      CKEDITOR.tools.extend(
        c,
        {
          dialog: "embedBase",
          button: b.lang.embedbase.button,
          allowedContent: "div[!data-oembed-url]",
          requiredContent: "div[data-oembed-url]",
          providerUrl: new CKEDITOR.template(b.config.embed_provider || ""),
          styleToAllowedContentRules: (a) => ({
            div: {
              propertiesOnly: !0,
              classes: a.getClassesArray(),
              attributes: "!data-oembed-url",
            },
          }),
          upcast: (a, b) => {
            if ("div" == a.name && a.attributes["data-oembed-url"])
              return (b.url = a.attributes["data-oembed-url"]), !0;
          },
          downcast: function (a) {
            a.attributes["data-oembed-url"] = this.data.url;
          },
        },
        !0
      );
      b.widgets.add("embed", c);
      b.filter.addElementCallback((a) => {
        if ("data-oembed-url" in a.attributes) return CKEDITOR.FILTER_SKIP_TREE;
      });
    },
  });
})();
