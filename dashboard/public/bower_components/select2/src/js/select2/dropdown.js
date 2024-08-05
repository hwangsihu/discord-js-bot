define(["jquery", "./utils"], ($, Utils) => {
  function Dropdown($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' + '<span class="select2-results"></span>' + "</span>"
    );

    $dropdown.attr("dir", this.options.get("dir"));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = () => {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = ($dropdown, $container) => {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});
