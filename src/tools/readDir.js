const nodePath = require('path');
const glob = require('glob');
const errors = require('../errors.js');
const exists = require('./exists.js');
const isDir = require('./isDir.js');
const tryCatch = require('./tryCatch.js');
const validateType = require('./validateType.js');

/**
 * Recursively reads files from a directory that match a pattern. Optionally can include
 * directories.
 *
 * @alias module:tools.readDir
 * @param {string} path Path to a directory.
 * @param {string} [pattern='** / *'] Glob pattern. Default value is without spaces.
 * @param {boolean} [includeDirs=false] Should directories be included.
 * @returns {array}
 */
function readDir(path, pattern = '**/*', includeDirs = false) {
  validateType('path', 'string', path);
  validateType('pattern', 'string', pattern);

  path = nodePath.resolve(path);
  !exists(path) && errors.pathDoesNotExist(path);
  !isDir(path) && errors.notDir(path);
  let content;

  tryCatch(
    () => content = glob.sync(nodePath.join(path, pattern), {nodir: !includeDirs}),
    () => errors.cantReadPath(path)
  );

  return content;
}

module.exports = readDir;
