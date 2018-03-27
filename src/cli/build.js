const nodePath = require('path');
const cliUtils = require('./utils.js');
const isFile = require('../tools/isFile.js');

function build(path = 'blego.js') {
  !isFile(path) && !isFile(path + '.js') && cliUtils.error('Unable to find', cliUtils.quote(path));
  !isFile(path) && (path = path + '.js');

  console.log(cliUtils.emoji.rocket, 'Building from', cliUtils.quote(path));
  console.log();

  require(nodePath.resolve(path));
}

module.exports = build;
