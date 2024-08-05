define(["jquery", "../utils", "../keys"], ($, Utils, keys) => {
  function Search(decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
        "</li>"
    );

    this.$searchContainer = $search;
    this.$search = $search.find("input");

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    container.on("open", () => {
      this.$search.trigger("focus");
    });

    container.on("close", () => {
      this.$search.val("");
      this.$search.removeAttr("aria-activedescendant");
      this.$search.trigger("focus");
    });

    container.on("enable", () => {
      this.$search.prop("disabled", false);

      this._transferTabIndex();
    });

    container.on("disable", () => {
      this.$search.prop("disabled", true);
    });

    container.on("focus", (evt) => {
      this.$search.trigger("focus");
    });

    container.on("results:focus", (params) => {
      this.$search.attr("aria-activedescendant", params.id);
    });

    this.$selection.on("focusin", ".select2-search--inline", (evt) => {
      this.trigger("focus", evt);
    });

    this.$selection.on("focusout", ".select2-search--inline", (evt) => {
      this._handleBlur(evt);
    });

    this.$selection.on("keydown", ".select2-search--inline", (evt) => {
      evt.stopPropagation();

      this.trigger("keypress", evt);

      this._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === keys.BACKSPACE && this.$search.val() === "") {
        var $previousChoice = this.$searchContainer.prev(".select2-selection__choice");

        if ($previousChoice.length > 0) {
          var item = Utils.GetData($previousChoice[0], "data");

          this.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on("input.searchcheck", ".select2-search--inline", (evt) => {
      // IE will trigger the `input` event when a placeholder is used on a
      // search box. To get around this issue, we are forced to ignore all
      // `input` events in IE and keep using `keyup`.
      if (disableInputEvents) {
        this.$selection.off("input.search input.searchcheck");
        return;
      }

      // Unbind the duplicated `keyup` event
      this.$selection.off("keyup.search");
    });

    this.$selection.on("keyup.search input.search", ".select2-search--inline", (evt) => {
      // IE will trigger the `input` event when a placeholder is used on a
      // search box. To get around this issue, we are forced to ignore all
      // `input` events in IE and keep using `keyup`.
      if (disableInputEvents && evt.type === "input") {
        this.$selection.off("input.search input.searchcheck");
        return;
      }

      var key = evt.which;

      // We can freely ignore events from modifier keys
      if (key == keys.SHIFT || key == keys.CTRL || key == keys.ALT) {
        return;
      }

      // Tabbing will be handled during the `keydown` phase
      if (key == keys.TAB) {
        return;
      }

      this.handleSearch(evt);
    });
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr("tabindex", this.$selection.attr("tabindex"));
    this.$selection.attr("tabindex", "-1");
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr("placeholder", placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr("placeholder", "");

    decorated.call(this, data);

    this.$selection.find(".select2-selection__rendered").append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      var isTagInput = this.$element.find("[data-select2-tag]").length;
      if (isTagInput) {
        // fix IE11 bug where tag input lost focus
        this.$element.focus();
      } else {
        this.$search.focus();
      }
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger("query", {
        term: input,
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger("unselect", {
      data: item,
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css("width", "25px");

    var width = "";

    if (this.$search.attr("placeholder") !== "") {
      width = this.$selection.find(".select2-selection__rendered").innerWidth();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = minimumWidth * 0.75 + "em";
    }

    this.$search.css("width", width);
  };

  return Search;
});
