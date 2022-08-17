'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zero human years when animals ages are 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 1 human year when animals ages are 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`should return 1 human year
  for the border value when animals ages are 23`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 human years when animals ages are 24.', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 human years when animals ages are 27', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test(`should return 3 human years cat*s age is 28
  and 2 human years when dog*s age is 28`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return 3 human years when animals ages are 29', () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });

  test(`should return 4 human years cat*s age is 32
  and 2 human years when dog*s age is 32`, () => {
    expect(getHumanAge(32, 32))
      .toEqual([4, 3]);
  });

  test('should return 4 human years when animals ages are 33', () => {
    expect(getHumanAge(34, 34))
      .toEqual([4, 4]);
  });

  test(`should return 23 human years cat*s age is 108
  and 18 human years when dog*s age is 108`, () => {
    expect(getHumanAge(108, 108))
      .toEqual([23, 18]);
  });
});
