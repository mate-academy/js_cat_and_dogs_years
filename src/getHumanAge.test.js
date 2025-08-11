'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return o if value <= 14', () => {
    expect(getHumanAge(8, 11))
      .toEqual([0, 0]);
  });

  test('should return 1 if 23 > value >=  15', () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);
  });

  test('should return 2 if 24<=age<=27', () => {
    expect(getHumanAge(27, 0))
      .toEqual([2, 0]);
  });

  test('should return 3 if 28=<=catAge<=31', () => {
    expect(getHumanAge(28, 0))
      .toEqual([3, 0]);
  });

  test('should return 4 if 32=<=catAge<=35', () => {
    expect(getHumanAge(32, 0))
      .toEqual([4, 0]);
  });

  test('should return 6 if 40=<=catAge<=43', () => {
    expect(getHumanAge(43, 0))
      .toEqual([6, 0]);
  });

  test('should return 2 if 24<=dogAge<=28', () => {
    expect(getHumanAge(0, 28))
      .toEqual([0, 2]);
  });

  test('should return 3 if 29=<=dogAge<=33', () => {
    expect(getHumanAge(0, 33))
      .toEqual([0, 3]);
  });

  test('should return 4 if dogAge 34=<=catAge<=38', () => {
    expect(getHumanAge(0, 37))
      .toEqual([0, 4]);
  });

  test('should return 7 if dogAge 49=<=catAge<=53', () => {
    expect(getHumanAge(0, 53))
      .toEqual([0, 7]);
  });
});
