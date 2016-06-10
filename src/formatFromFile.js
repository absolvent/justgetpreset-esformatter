/**
 * Copyright (c) 2016-present, lookly
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const format = require('./format');
const fs = require('fs');
const Promise = require('bluebird');

function formatFromFile(filename) {
  return Promise.fromCallback(cb => fs.readFile(filename, cb))
    .then(contents => contents.toString())
    .then(contents => format(contents));
}

module.exports = formatFromFile;
