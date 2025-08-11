'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge())
      .toBeInstanceOf(Array);
  });

  test('should return an array of lenght 2', () => {
    expect(getHumanAge())
      .toHaveLength(2);
  });

  test('should return an array of numbers', () => {
    const ages = getHumanAge(15, 15);

    ages.forEach(age => {
      expect(age)
        .not.toBeNaN();
    });
  });

  test('should return [0, 0] if catAges is 0, and dogAges is 0', () => {
    expect(getHumanAge(0, 0))
      .toStrictEqual([0, 0]);
  });

  test('should return [0, 0] if catAges is 14, and dogAges is 14', () => {
    expect(getHumanAge(14, 14))
      .toStrictEqual([0, 0]);
  });

  test('should return [1, 1] if catAges is 15, and dogAges is 15', () => {
    expect(getHumanAge(15, 15))
      .toStrictEqual([1, 1]);
  });

  test('should return [1, 1] if catAges is 23, and dogAges is 23', () => {
    expect(getHumanAge(23, 23))
      .toStrictEqual([1, 1]);
  });

  test('should return [2, 2] if catAges is 24, and dogAges is 24', () => {
    expect(getHumanAge(24, 24))
      .toStrictEqual([2, 2]);
  });

  test('should return [2, 2] if catAges is 27, and dogAges is 27', () => {
    expect(getHumanAge(27, 27))
      .toStrictEqual([2, 2]);
  });

  test('should return [3, 2] if catAges is 28, and dogAges is 28', () => {
    expect(getHumanAge(28, 28))
      .toStrictEqual([3, 2]);
  });

  test('should return [21, 17] if catAges is 100, and dogAges is 100', () => {
    expect(getHumanAge(100, 100))
      .toStrictEqual([21, 17]);
  });
});
