define(["jquery", "../utils", "../keys"], ($, Utils, keys) => {
  function BaseSelection($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
        ' aria-haspopup="true" aria-expanded="false">' +
        "</span>"
    );

    this._tabindex = 0;

    if (Utils.GetData(this.$element[0], "old-tabindex") != null) {
      this._tabindex = Utils.GetData(this.$element[0], "old-tabindex");
    } else if (this.$element.attr("tabindex") != null) {
      this._tabindex = this.$element.attr("tabindex");
    }

    $selection.attr("title", this.$element.attr("title"));
    $selection.attr("tabindex", this._tabindex);

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var id = container.id + "-container";
    var resultsId = container.id + "-results";

    this.container = container;

    this.$selection.on("focus", (evt) => {
      this.trigger("focus", evt);
    });

    this.$selection.on("blur", (evt) => {
      this._handleBlur(evt);
    });

    this.$selection.on("keydown", (evt) => {
      this.trigger("keypress", evt);

      if (evt.which === keys.SPACE) {
        evt.preventDefault();
      }
    });

    container.on("results:focus", (params) => {
      this.$selection.attr("aria-activedescendant", params.data._resultId);
    });

    container.on("selection:update", (params) => {
      this.update(params.data);
    });

    container.on("open", () => {
      // When the dropdown is open, aria-expanded="true"
      this.$selection.attr("aria-expanded", "true");
      this.$selection.attr("aria-owns", resultsId);

      this._attachCloseHandler(container);
    });

    container.on("close", () => {
      // When the dropdown is closed, aria-expanded="false"
      this.$selection.attr("aria-expanded", "false");
      this.$selection.removeAttr("aria-activedescendant");
      this.$selection.removeAttr("aria-owns");

      window.setTimeout(() => {
        this.$selection.focus();
      }, 0);

      this._detachCloseHandler(container);
    });

    container.on("enable", () => {
      this.$selection.attr("tabindex", this._tabindex);
    });

    container.on("disable", () => {
      this.$selection.attr("tabindex", "-1");
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(() => {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        document.activeElement == this.$selection[0] ||
        $.contains(this.$selection[0], document.activeElement)
      ) {
        return;
      }

      this.trigger("blur", evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = (container) => {
    $(document.body).on("mousedown.select2." + container.id, (e) => {
      var $target = $(e.target);

      var $select = $target.closest(".select2");

      var $all = $(".select2.select2-container--open");

      $all.each(function () {
        var $this = $(this);

        if (this == $select[0]) {
          return;
        }

        var $element = Utils.GetData(this, "element");

        $element.select2("close");
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = (container) => {
    $(document.body).off("mousedown.select2." + container.id);
  };

  BaseSelection.prototype.position = ($selection, $container) => {
    var $selectionContainer = $container.find(".selection");
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = (data) => {
    throw new Error("The `update` method must be defined in child classes.");
  };

  return BaseSelection;
});
