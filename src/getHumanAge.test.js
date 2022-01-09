'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if catAge && dogAge equal 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 when input is 14 for both values', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1 when input is 15 for both values', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 when input is 19 for both values', () => {
    expect(getHumanAge(19, 19))
      .toEqual([1, 1]);
  });

  test('should add 1 human year to the result when input is 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should add 1 human year to the result when input is 27', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should add 1 extra human year when input is 28 for catAge', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should add 1 extra human year when input is 29 for dogAge', () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });

  test('should round the value if the age is not integer', () => {
    expect(getHumanAge(60, 60))
      .toEqual([11, 9]);
  });
});
