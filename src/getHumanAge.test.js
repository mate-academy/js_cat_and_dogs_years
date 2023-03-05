'use strict';

const { getHumanAge } = require('./getHumanAge');

test('should be declared', () => {
  expect(getHumanAge).toBeInstanceOf(Function);
});

test('should calculate age with valid data', () => {
  expect(getHumanAge(14, 14)).toEqual([0, 0]);
});

test('should handle infinity case', () => {
  expect(getHumanAge(Infinity, Infinity)).toEqual([Infinity, Infinity]);
});
