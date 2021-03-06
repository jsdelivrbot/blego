const util = require('util');
const handlebars = require('handlebars');

/**
 * Registers Handlebars helpers.
 *
 * @private
 * @instance
 * @memberof Blego
 */
function setCoreMacros() {
  this.task('Setting core macros', () => {
    this.macro('dd', this.dd);
    this.macro('dump', this.dump);
  });
}

module.exports = setCoreMacros;
