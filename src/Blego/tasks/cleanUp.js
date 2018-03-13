/**
 * Cleans the destination directory.
 *
 * @private
 * @instance
 * @memberof Blego
 */
function cleanUp() {
  this.task('Clean destination directory', () => {
    this.tools.cleanDir(this.options.paths.dest);
  });
}

module.exports = cleanUp;