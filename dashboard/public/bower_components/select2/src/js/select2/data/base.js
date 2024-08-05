define(["../utils"], (Utils) => {
  function BaseAdapter($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = (callback) => {
    throw new Error("The `current` method must be defined in child classes.");
  };

  BaseAdapter.prototype.query = (params, callback) => {
    throw new Error("The `query` method must be defined in child classes.");
  };

  BaseAdapter.prototype.bind = (container, $container) => {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = () => {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = (container, data) => {
    var id = container.id + "-result-";

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += "-" + data.id.toString();
    } else {
      id += "-" + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});
