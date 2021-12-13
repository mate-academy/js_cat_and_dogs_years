'use strict';

describe('getHumanAge', () => {
  const {
    getHumanAge,
  } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zeros if cats age and dogs age < 15', () => {
    const catAge = 7;
    const dogAge = 11;

    expect(getHumanAge(catAge, dogAge)).toStrictEqual([0, 0]);
  });

  test('should return zeros if cats age and dogs age = 0', () => {
    const catAge = 0;
    const dogAge = 0;

    expect(getHumanAge(catAge, dogAge)).toStrictEqual([0, 0]);
  });

  test('should return [1, 1] if cats age and dogs age = 15', () => {
    const catAge = 15;
    const dogAge = 15;

    expect(getHumanAge(catAge, dogAge)).toStrictEqual([1, 1]);
  });

  test('should return [1, 1] if cats age and dogs age > 15 and < 24', () => {
    const catAge = 20;
    const dogAge = 16;

    expect(getHumanAge(catAge, dogAge)).toStrictEqual([1, 1]);
  });

  test('should return [1, 1] if cats age and dogs age = 23', () => {
    const catAge = 23;
    const dogAge = 23;

    expect(getHumanAge(catAge, dogAge)).toStrictEqual([1, 1]);
  });

  test('should return [2, 2] if cats age and dogs age = 24', () => {
    const catAge = 24;
    const dogAge = 24;

    expect(getHumanAge(catAge, dogAge)).toStrictEqual([2, 2]);
  });

  test('should return [2, 2] if cats age < 28 and dogs age < 29', () => {
    const catAge = 27;
    const dogAge = 28;

    expect(getHumanAge(catAge, dogAge)).toStrictEqual([2, 2]);
  });

  test('should return [2, 2] if cats age = 27 and dogs age = 28', () => {
    const catAge = 27;
    const dogAge = 28;

    expect(getHumanAge(catAge, dogAge)).toStrictEqual([2, 2]);
  });

  test('should return [3, 2] if cats age = 28 and dogs age = 28', () => {
    const catAge = 28;
    const dogAge = 28;

    expect(getHumanAge(catAge, dogAge)).toStrictEqual([3, 2]);
  });

  test('should return [3, 3] if cats age = 28 and dogs age = 29', () => {
    const catAge = 28;
    const dogAge = 29;

    expect(getHumanAge(catAge, dogAge)).toStrictEqual([3, 3]);
  });

  test('should return [3, 3] if cats age < 32 and dogs age < 34', () => {
    const catAge = 31;
    const dogAge = 30;

    expect(getHumanAge(catAge, dogAge)).toStrictEqual([3, 3]);
  });

  test('should return digit array, if cats age and dogs age are 3-dgt', () => {
    const catAge = 100;
    const dogAge = 100;

    expect(getHumanAge(catAge, dogAge)).toStrictEqual([21, 17]);
  });
});
