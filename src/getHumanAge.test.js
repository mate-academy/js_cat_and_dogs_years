'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return integers in array', () => {
    const [catHumanAge, dogHumanAge] = getHumanAge(5, 5);

    expect(Number.isInteger(catHumanAge)).toBe(true);
    expect(Number.isInteger(dogHumanAge)).toBe(true);
  });

  test('should return [0, 0] for ages less than 15', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [1, 1] for ages less than 24 but bigger than 14', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
  });

  test('should return [2, 2] for ages [24, 24]', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 3 for cat age equal to 28', () => {
    const [catHumanAge] = getHumanAge(28, 5);

    expect(catHumanAge).toBe(3);
  });

  test('should return 3 for dog age equal to 29', () => {
    const [, dogHumanAge] = getHumanAge(5, 29);

    expect(dogHumanAge).toBe(3);
  });

  test('should calculate correctly big ages', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
