'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});

test('should return human ages for cat and dog', () => {
  expect(getHumanAge(0, 0)).toEqual([0, 0]);

  expect(getHumanAge(28, 29)).toEqual([3, 3]);

  expect(getHumanAge(32, 34)).toEqual([4, 4]);

  expect(getHumanAge(36, 39)).toEqual([6, 6]);

  expect(getHumanAge(71, 67)).toEqual([29, 25]);
});
