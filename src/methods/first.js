'use strict';

const { isFunction } = require('../helpers/is');

module.exports = function first(fn, defaultValue) {
  if (isFunction(fn)) {

    const entries = Object.entries(this.items);

    for (i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const key = entry[0];
      const item = entry[1];

      if (fn(item, key)) {
        return item;
      }
    };

    if (isFunction(defaultValue)) {
      return defaultValue();
    }

    return defaultValue;
  }

  if ((Array.isArray(this.items) && this.items.length) || (Object.keys(this.items).length)) {
    if (Array.isArray(this.items)) {
      return this.items[0];
    }

    const firstKey = Object.keys(this.items)[0];

    return this.items[firstKey];
  }

  if (isFunction(defaultValue)) {
    return defaultValue();
  }

  return defaultValue;
};
