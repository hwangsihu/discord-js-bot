define([
  "../core",
  "../queue",
  "../effects", // Delay is optional because of this dependency
], (jQuery) => {
  // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";

    return this.queue(type, (next, hooks) => {
      var timeout = window.setTimeout(next, time);
      hooks.stop = () => {
        window.clearTimeout(timeout);
      };
    });
  };

  return jQuery.fn.delay;
});
