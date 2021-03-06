const nodePath = require('path');
const fs = require('fs-extra');
const handlebars = require('handlebars');
const merge = require('lodash.merge');
const errors = require('../errors.js');

/**
 * Creates a rendered page.
 *
 * @instance
 * @memberof Blego
 * @param {string} path Path to a rendered file.
 * @param {string} templatePath Path to the template file.
 * @param {object} context Data available in the template.
 */
function page(path, templatePath, context) {
  this.tools.validateType('path', 'string', path);
  this.tools.validateType('templatePath', 'string', templatePath);
  this.tools.validateType('context', Object, context);

  path = this.tools.jailPath(path);
  templatePath = this.tools.jailPath(templatePath);
  path = nodePath.resolve(this.internal.paths.dest, path);
  templatePath = nodePath.resolve(this.internal.paths.template, templatePath);
  this.tools.exists(path) && errors.pathExists(path);

  const templateSource = this.tools.readFile(templatePath);
  const templateCompiled = handlebars.compile(templateSource);
  const rendered = templateCompiled(merge({}, this.global, context));
  fs.ensureFileSync(path);
  fs.writeFileSync(path, rendered);
};

module.exports = page;
