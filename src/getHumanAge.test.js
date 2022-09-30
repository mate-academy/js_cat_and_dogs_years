/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return cat\'s human-age equal to 0 if age is < 15', () => {
    expect(getHumanAge(5, 14))
      .toEqual([0, 0]);
  });

  test('should return dog\'s human-age equal to 0 if age is < 15', () => {
    expect(getHumanAge(14, 5))
      .toEqual([0, 0]);
  });

  test('should return cat\'s human-ages equal to 1 if age >= 15 and < 24', () => {
    expect(getHumanAge(15, 23))
      .toEqual([1, 1]);
  });

  test('should return dog\'s human-ages equal to 1 if age >= 15 and < 24', () => {
    expect(getHumanAge(23, 15))
      .toEqual([1, 1]);
  });

  test('should return correct cat\'s human-age for ages >= 24', () => {
    expect(getHumanAge(26, 24))
      .toEqual([2, 2]);
  });

  test('should return correct dog\'s human-age for ages >= 24', () => {
    expect(getHumanAge(24, 29))
      .toEqual([2, 3]);
  });
});
