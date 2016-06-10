/**
 * Copyright (c) 2016-present, lookly
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const esformatter = require('esformatter');
const esformatterAddTrailingCommas = require('esformatter-add-trailing-commas');
const esformatterBraces = require('esformatter-braces');
const esformatterQuoteProps = require('esformatter-quote-props');
const esformatterQuotes = require('esformatter-quotes');
const esformatterSemicolons = require('esformatter-semicolons');
const esformatterVarEach = require('esformatter-var-each');

esformatter.unregisterAll();
esformatter.register(esformatterAddTrailingCommas);
esformatter.register(esformatterBraces);
esformatter.register(esformatterQuoteProps);
esformatter.register(esformatterQuotes);
esformatter.register(esformatterSemicolons);
esformatter.register(esformatterVarEach);

function format(code) {
  return esformatter.format(code, {
    indent: {
      value: '  ',
    },
    quotes: {
      avoidEscape: true,
      type: 'single',
    },
    whiteSpace: {
      removeTrailing: true,
      after: {
        FunctionReservedWord: 1,
        ObjectPatternOpeningBrace: 1,
      },
      before: {
        FunctionName: 1,
        ObjectPatternClosingBrace: 1,
      },
    },
  });
}

module.exports = format;
