define(["jquery"], ($) => {
  function ClickMask() {}

  ClickMask.prototype.bind = function (decorate, $container, container) {
    decorate.call(this, $container, container);

    this.$mask = $('<div class="select2-close-mask"></div>');

    this.$mask.on("mousedown touchstart click", () => {
      this.trigger("close", {});
    });
  };

  ClickMask.prototype._attachCloseHandler = function (decorate, container) {
    $(document.body).append(this.$mask);
  };

  ClickMask.prototype._detachCloseHandler = function (deocrate, container) {
    this.$mask.detach();
  };

  return ClickMask;
});
