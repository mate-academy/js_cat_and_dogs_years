'use strict';

const { getHumanAge } = require('./getHumanAge'); // путь к вашему файлу

describe('getHumanAge', () => {
  test('should return human ages for typical cat and dog ages', () => {
    expect(getHumanAge(1, 1)).toEqual([0, 0]);
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(28, 30)).toEqual([3, 3]);
    expect(getHumanAge(40, 45)).toEqual([6, 6]); // исправлено
  });

  test('should return integers only', () => {
    const [catHuman, dogHuman] = getHumanAge(23, 29);

    expect(Number.isInteger(catHuman)).toBe(true);
    expect(Number.isInteger(dogHuman)).toBe(true);
  });

  test('catAge edge cases', () => {
    expect(getHumanAge(0, 10)).toEqual([0, 0]); // исправлено
    expect(getHumanAge(15, 10)).toEqual([1, 0]);
    expect(getHumanAge(24, 10)).toEqual([2, 0]);
    expect(getHumanAge(25, 10)).toEqual([2, 0]);
    expect(getHumanAge(29, 10)).toEqual([3, 0]);
  });

  test('dogAge edge cases', () => {
    expect(getHumanAge(10, 0)).toEqual([0, 0]);
    expect(getHumanAge(10, 15)).toEqual([0, 1]);
    expect(getHumanAge(10, 24)).toEqual([0, 2]);
    expect(getHumanAge(10, 25)).toEqual([0, 2]);
    expect(getHumanAge(10, 30)).toEqual([0, 3]);
  });

  test('large ages', () => {
    expect(getHumanAge(100, 100)).toEqual([
      2 + Math.floor((100 - 15 - 9) / 4), // кошка
      2 + Math.floor((100 - 15 - 9) / 5), // собака
    ]);
  });
});
