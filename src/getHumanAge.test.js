'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});

test('the first element is my cats and gogs age in human years', () => {
  expect(getHumanAge(0, 0)).toEqual([0, 0]);
  expect(getHumanAge(14, 14)).toEqual([0, 0]);
  expect(getHumanAge(15, 15)).toEqual([1, 1]);
  expect(getHumanAge(23, 23)).toEqual([1, 1]);
  expect(getHumanAge(28, 28)).toEqual([3, 2]);
  expect(getHumanAge(100, 100)).toEqual([21, 17]);
});
