'use strict';

describe('getHumanAge', () => {
  const {
    getHumanAge,
  } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zeros if cats age = 7 and dogs age = 11', () => {
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

  test('should return [1, 1] if cats age = 20 and dogs age = 24', () => {
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

  test('should return [2, 2] if cats age = 26 and dogs age = 27', () => {
    const catAge = 26;
    const dogAge = 27;

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

  test('should return [3, 3] if cats age = 31 and dogs age = 33', () => {
    const catAge = 31;
    const dogAge = 33;

    expect(getHumanAge(catAge, dogAge)).toStrictEqual([3, 3]);
  });

  test('should return digit array, if cats age and dogs age = 100', () => {
    const catAge = 100;
    const dogAge = 100;

    expect(getHumanAge(catAge, dogAge)).toStrictEqual([21, 17]);
  });
});
