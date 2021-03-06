const collect = require('collect.js');
const errors = require('./errors.js');
const Record = require('./Record.js');

/**
 * Creates a Store object. All records must have a unique key.
 *
 * @constructor
 * @param {array} records Records to be added to the store.
 */
function Store(records) {
  validateRecords(records);
  this.collection = collect(records);

  this.dd = require('./Store/dd.js');
  this.dump = require('./Store/dump.js');

  this.all   = require('./Store/all.js');
  this.chunk = require('./Store/chunk.js');
  this.count = require('./Store/count.js');
  this.each = require('./Store/each.js');
  this.filter = require('./Store/filter.js');
  this.get = require('./Store/get.js');
  this.isEmpty = require('./Store/isEmpty.js');
  this.keyed = require('./Store/keyed.js');
  this.map = require('./Store/map.js');
  this.pluck = require('./Store/pluck.js');
  this.reverse = require('./Store/reverse.js');
  this.sort = require('./Store/sort.js');
  this.sortBy = require('./Store/sortBy.js');
  this.take = require('./Store/take.js');
  this.where = require('./Store/where.js');

  this.linkToOne    = require('./Store/linkToOne.js');
  this.linkToMany   = require('./Store/linkToMany.js');
  this.linkFromOne  = require('./Store/linkFromOne.js');
  this.linkFromMany = require('./Store/linkFromMany.js');
}

/**
 * Checks for duplicate keys and correct type.
 *
 * @private
 * @param {array} records Records to be validated.
 */
function validateRecords(records) {
  let keys = {};

  records.forEach((record) => {
    record instanceof Record || errors.invalidRecordType();
    keys[record.key] ? errors.recordKeyDupe() : keys[record.key] = true;
  });
}

module.exports = Store;
