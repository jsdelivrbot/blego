const util = require('util');

const ERRORS = {
  invalidType: 'Value of "%s" must be of type %s; not %s.',
  invalidTypeInArray: 'All values of "%s" must be of type %s; not %s',
  pathExists: '"%s" already exists.',
  pathDoesNotExist: '"%s" does not exist.',
  notFile: '"%s" is not a file.',
  notDir: '"%s" is not a directory.',
  cantReadPath: 'Unable to read "%s".',
  cantClean: 'Unable to clean "%s" directory.',
  cantCopy: 'Unable to copy "%s" to "%s".',
  invalidRecordType: 'All records must be of type Record.',
  keyRequired: 'Key is required.',
  recordKeyDupe: 'All records must have a unique key.',
  noType: '"%s" has no type.',
  noParser: '"%s" has unsupported type.',
  cantParse: 'Unable to parse "%s". Check syntax.',
  recordNotFound: 'Record with "%s" key from "%s" prop in "%s" does not exist.',
  recordLinked: 'Record with "%s" key from "%s" prop in "%s" was already linked from "%s".',
};

module.exports = {
  invalidType: (name, expectedType, actualType) => { throw new Error(util.format(ERRORS.invalidType, name, expectedType, actualType)) },
  invalidTypeInArray: (name, expectedType, actualType) => { throw new Error(util.format(ERRORS.invalidTypeInArray, name, expectedType, actualType)) },
  pathExists: (path) => { throw new Error(util.format(ERRORS.pathExists, path)) },
  pathDoesNotExist: (path) => { throw new Error(util.format(ERRORS.pathDoesNotExist, path)) },
  notFile: (path) => { throw new Error(util.format(ERRORS.notFile, path)) },
  notDir: (path) => { throw new Error(util.format(ERRORS.notDir, path)) },
  cantReadPath: (path) => { throw new Error(util.format(ERRORS.cantReadPath, path)) },
  cantClean: (path) => { throw new Error(util.format(ERRORS.cantClean, path)) },
  cantCopy: (src, dest) => { throw new Error(util.format(ERRORS.cantCopy, src, dest)) },
  invalidRecordType: () => { throw new Error(ERRORS.invalidRecordType) },
  keyRequired: () => { throw new Error(ERRORS.keyRequired) },
  recordKeyDupe: () => { throw new Error(ERRORS.recordKeyDupe) },
  noType: (path) => { throw new Error(util.format(ERRORS.noType, path)) },
  noParser: (path) => { throw new Error(util.format(ERRORS.noParser, path)) },
  cantParse: (path) => { throw new Error(util.format(ERRORS.cantParse, path)) },
  recordNotFound: (ref, prop, key) => { throw new Error(util.format(ERRORS.recordNotFound, ref, prop, key)) },
  recordLinked: (ref, prop, key, link) => { throw new Error(util.format(ERRORS.recordLinked, ref, prop, key, link)) },
};
