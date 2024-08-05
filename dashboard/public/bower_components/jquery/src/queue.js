define(["./core", "./data/var/dataPriv", "./deferred", "./callbacks"], (jQuery, dataPriv) => {
  jQuery.extend({
    queue: (elem, type, data) => {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type);

        // Speed up dequeue by getting out quickly if this is just a lookup
        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },

    dequeue: (elem, type) => {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
        startLength = queue.length,
        fn = queue.shift(),
        hooks = jQuery._queueHooks(elem, type),
        next = () => {
          jQuery.dequeue(elem, type);
        };

      // If the fx queue is dequeued, always remove the progress sentinel
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        }

        // Clear up the last queue stop function
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },

    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: (elem, type) => {
      var key = type + "queueHooks";
      return (
        dataPriv.get(elem, key) ||
        dataPriv.access(elem, key, {
          empty: jQuery.Callbacks("once memory").add(() => {
            dataPriv.remove(elem, [type + "queue", key]);
          }),
        })
      );
    },
  });

  jQuery.fn.extend({
    queue: function (type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined
        ? this
        : this.each(function () {
            var queue = jQuery.queue(this, type, data);

            // Ensure a hooks for this queue
            jQuery._queueHooks(this, type);

            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery.dequeue(this, type);
            }
          });
    },
    dequeue: function (type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function (type) {
      return this.queue(type || "fx", []);
    },

    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function (type, obj) {
      var tmp,
        count = 1,
        defer = jQuery.Deferred(),
        i = this.length,
        resolve = () => {
          if (!--count) {
            defer.resolveWith(this, [this]);
          }
        };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }
      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(this[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    },
  });

  return jQuery;
});
