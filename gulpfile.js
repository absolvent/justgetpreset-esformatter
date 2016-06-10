/**
 * Copyright (c) 2016-present, lookly
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const ava = require('lookly-preset-ava');
const gulp = require('gulp');
const esformatter = require('./src');
const eslint = require('lookly-preset-eslint');

const formattedFiles = [
  __filename,
  './src/**/*.js',
];

gulp.task('format', function () {
  return esformatter(formattedFiles);
});

gulp.task('lint', ['format'], function () {
  return eslint(formattedFiles);
});

gulp.task('test', ['lint'], function () {
  return ava([
    './src/__tests__/**/*.js',
  ]);
});
