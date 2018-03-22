const parseDataDir = require('../../tools/parseDataDir.js');

/**
 * Parses the globals files.
 *
 * @private
 * @instance
 * @memberof Blego
 */
function loadGlobals() {
  this.task('Load globals', () => {
    this.global = parseDataDir(this.paths.globals).cast();
  });
}

module.exports = loadGlobals;
