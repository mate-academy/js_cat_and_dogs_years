'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Age 0 should return 0', () => {
    expect(getHumanAge(0, 0)
      .toEqual(0, 0))
  });

  test('Return 0 when age is 14', () => {
    expect(getHumanAge(14, 14)
      .toEqual(0, 0))
  });
  test('Return 1 when age is 15', () => {
    expect(getHumanAge(15, 15)
      .toEqual(1, 1))
  });

  test('Return 1 when age is 23', () => {
    expect(getHumanAge(23, 23)
      .toEqual(1, 1))
  });

  test('Return 2 when age is 24', () => {
    expect(getHumanAge(24, 24)
      .toEqual(2, 2))
  });

  test('Return 2 when age is 27', () => {
    expect(getHumanAge(27, 27)
      .toEqual(2, 2))
  });

  test('Return 3 and 2 when age is 28', () => {
    expect(getHumanAge(28, 28)
      .toEqual(3, 2))
  });

  test('Return 21 and 17 when age is 100', () => {
    expect(getHumanAge(100, 100)
      .toEqual(21, 17))
  });

});
