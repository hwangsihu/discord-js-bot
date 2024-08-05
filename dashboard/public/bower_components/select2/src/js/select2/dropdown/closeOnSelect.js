define([], () => {
  function CloseOnSelect() {}

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    container.on("select", (evt) => {
      this._selectTriggered(evt);
    });

    container.on("unselect", (evt) => {
      this._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
      return;
    }

    this.trigger("close", {
      originalEvent: originalEvent,
      originalSelect2Event: evt,
    });
  };

  return CloseOnSelect;
});
