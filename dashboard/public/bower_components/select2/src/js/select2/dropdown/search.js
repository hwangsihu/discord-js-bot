define(["jquery", "../utils"], ($, Utils) => {
  function Search() {}

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="textbox" />' +
        "</span>"
    );

    this.$searchContainer = $search;
    this.$search = $search.find("input");

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search.on("keydown", (evt) => {
      this.trigger("keypress", evt);

      this._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on("input", function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off("keyup");
    });

    this.$search.on("keyup input", (evt) => {
      this.handleSearch(evt);
    });

    container.on("open", () => {
      this.$search.attr("tabindex", 0);

      this.$search.focus();

      window.setTimeout(() => {
        this.$search.focus();
      }, 0);
    });

    container.on("close", () => {
      this.$search.attr("tabindex", -1);

      this.$search.val("");
      this.$search.blur();
    });

    container.on("focus", () => {
      if (!container.isOpen()) {
        this.$search.focus();
      }
    });

    container.on("results:all", (params) => {
      if (params.query.term == null || params.query.term === "") {
        var showSearch = this.showSearch(params);

        if (showSearch) {
          this.$searchContainer.removeClass("select2-search--hide");
        } else {
          this.$searchContainer.addClass("select2-search--hide");
        }
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger("query", {
        term: input,
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = (_, params) => true;

  return Search;
});
