/**
 * Copyright (c) 2016-present, spacekick
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

/* global describe: false, it: false */

const esformatter = require('../index');
const path = require('path');

describe('format', function () {
  it('should format code in place', function () {
    const fixturePath = path.resolve(__dirname, '../../__fixtures__/1.input.js');

    return esformatter.formatFile(fixturePath).then(formatted => {
      console.log(formatted);
    });
  });
});
