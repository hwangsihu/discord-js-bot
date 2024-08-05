define([], () => {
  function MaximumSelectionLength(decorated, $e, options) {
    this.maximumSelectionLength = options.get("maximumSelectionLength");

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.query = function (decorated, params, callback) {
    this.current((currentData) => {
      var count = currentData != null ? currentData.length : 0;
      if (this.maximumSelectionLength > 0 && count >= this.maximumSelectionLength) {
        this.trigger("results:message", {
          message: "maximumSelected",
          args: {
            maximum: this.maximumSelectionLength,
          },
        });
        return;
      }
      decorated.call(this, params, callback);
    });
  };

  return MaximumSelectionLength;
});
