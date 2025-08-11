'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if input is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return NaN if input is " " ', () => {
    expect(getHumanAge('cat', 1)).toEqual([NaN, 0]);
  });

  test('should return integer if input is non-iteger ', () => {
    expect(getHumanAge(15.1, 1)).toEqual([1, 0]);
  });

  test('should return 0 if input is <15', () => {
    expect(getHumanAge(7, 11)).toEqual([0, 0]);
  });

  test('should return 1 if input is >= 15 and <24 ', () => {
    expect(getHumanAge(23, 21)).toEqual([1, 1]);
  });

  test('should return 2 if catAge is >= 24 and <28 ', () => {
    expect(getHumanAge(27, 21)).toEqual([2, 1]);
  });

  test('should return 3 if catAge is >= 28 and <32 ', () => {
    expect(getHumanAge(30, 21)).toEqual([3, 1]);
  });

  test('should return 2 if dogAge is >= 24 and <29 ', () => {
    expect(getHumanAge(3, 26)).toEqual([0, 2]);
  });

  test('should return 3 if dogAge is >= 29 and <34 ', () => {
    expect(getHumanAge(4.9, 33)).toEqual([0, 3]);
  });
});
