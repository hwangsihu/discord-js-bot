import { normalizeObjectUnits } from "../units/aliases";
import map from "../utils/map";
import { configFromArray } from "./from-array";

export function configFromObject(config) {
  if (config._d) {
    return;
  }

  var i = normalizeObjectUnits(config._i);
  config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
    return obj && parseInt(obj, 10);
  });

  configFromArray(config);
}
