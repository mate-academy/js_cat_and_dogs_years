'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('getHumanAge is a function', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('age of animals is less than 15', () => {
    expect(getHumanAge(0, 14))
      .toEqual([0, 0]);
  });

  test('age of animals is more or equal 15 and less than 24', () => {
    expect(getHumanAge(15, 23))
      .toEqual([1, 1]);
  });

  test('age of animals is more or equal 25', () => {
    expect(getHumanAge(25, 50))
      .toEqual([2, 7]);
  });
});
