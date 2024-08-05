define(["../var/class2type", "../var/toString"], (class2type, toString) => {
  function toType(obj) {
    if (obj == null) {
      return obj + "";
    }

    // Support: Android <=2.3 only (functionish RegExp)
    return typeof obj === "object" || typeof obj === "function"
      ? class2type[toString.call(obj)] || "object"
      : typeof obj;
  }

  return toType;
});
