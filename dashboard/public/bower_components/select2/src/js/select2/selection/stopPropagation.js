define([], () => {
  function StopPropagation() {}

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
      "blur",
      "change",
      "click",
      "dblclick",
      "focus",
      "focusin",
      "focusout",
      "input",
      "keydown",
      "keyup",
      "keypress",
      "mousedown",
      "mouseenter",
      "mouseleave",
      "mousemove",
      "mouseover",
      "mouseup",
      "search",
      "touchend",
      "touchstart",
    ];

    this.$selection.on(stoppedEvents.join(" "), (evt) => {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});
