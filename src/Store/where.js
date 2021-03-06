const tools = require('../tools.js');

/**
 * Gets a new store with records having the given property equal to given value.
 *
 * @instance
 * @memberof Store
 * @param {string} prop Record property to check.
 * @param {mixed} value Desired value of the property.
 * @return {store}
 */
function where(prop, value) {
  tools.validateType('prop', 'string', prop);

  const records = this.collection.filter((record) => {
    return Array.isArray(record[prop]) ? record[prop].includes(value) : record[prop] === value;
  });

  return new this.constructor(records.all());
}

module.exports = where;
