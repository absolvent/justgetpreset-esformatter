/**
 * Copyright (c) 2016-present, lookly
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const formatFromFile = require('./formatFromFile');
const fs = require('fs');
const Promise = require('bluebird');

function formatFile(filename) {
  return formatFromFile(filename).then(formatted => (
  Promise.fromCallback(cb => fs.writeFile(filename, formatted, cb))
  ));
}

module.exports = formatFile;
