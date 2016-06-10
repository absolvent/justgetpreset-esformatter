/**
 * Copyright (c) 2016-present, lookly
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

/* global describe: false, it: false */

const formatFromFile = require('../formatFromFile');
const path = require('path');
const test = require('lookly-preset-ava/test');

test('should format code in place', function () {
  const fixturePath = path.resolve(__dirname, '../../__fixtures__/1.input.js');

  return formatFromFile(fixturePath);
});
