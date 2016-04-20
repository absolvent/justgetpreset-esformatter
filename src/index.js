/**
 * Copyright (c) 2016-present, spacekick
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const esformatter = require('esformatter');
const esformatterBraces = require('esformatter-braces');
const esformatterJsx = require('esformatter-jsx');
const esformatterQuoteProps = require('esformatter-quote-props');
const esformatterQuotes = require('esformatter-quotes');
const esformatterVarEach = require('esformatter-var-each');
const fs = require('fs');
const Promise = require('bluebird');

esformatter.unregisterAll();
esformatter.register(esformatterBraces);
esformatter.register(esformatterJsx);
esformatter.register(esformatterQuoteProps);
esformatter.register(esformatterQuotes);
esformatter.register(esformatterVarEach);

function format(code) {
  return esformatter.format(code, {
    indent: {
      value: '  ',
    },
    jsx: {
      spaceInJSXExpressionContainers: '',
    },
    quotes: {
      avoidEscape: true,
      type: 'single',
    },
    whiteSpace: {
      removeTrailing: true,
      before: {
      },
    },
  });
}

function formatFile(filename) {
  return Promise.fromCallback(callback => fs.readFile(filename, callback))
    .then(contents => contents.toString())
    .then(contents => format(contents))
  ;
}

module.exports = {
  format,
  formatFile,
};
