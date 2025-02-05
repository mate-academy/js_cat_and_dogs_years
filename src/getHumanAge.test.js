'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});

test('the result age should be equal or greater than 0', () => {
  getHumanAge(-1, -1).forEach(result => {
    expect(result).toBeGreaterThanOrEqual(0);
  });
});

test('the result should be 0, 0 if their age almost 1 year', () => {
  expect(getHumanAge(14, 14)).toEqual([0, 0]);
});

test('the result should be 1, 1 even if their age almost 2 years', () => {
  expect(getHumanAge(23, 23)).toEqual([1, 1]);
});

test('the result is rounded down', () => {
  expect(getHumanAge(29, 30)).toEqual([3, 3]);
});

test('the result is rounded down', () => {
  expect(getHumanAge(29, 30)).toEqual([3, 3]);
});
