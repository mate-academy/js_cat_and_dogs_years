'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should calculate cat/dog age correctly into human age', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should be set to zero for negative values', () => {
    expect(getHumanAge(-1, -5)).toEqual([0, 0]);
  });

  test('should correctly convert first 15 cat years', () => {
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
  });

  test('should correctly convert 24 cat years', () => {
    expect(getHumanAge(24, 0)).toEqual([2, 0]);
  });

  test('should correctly convert every 4 next cat years', () => {
    const catCases = [
      {
        catAge: 28, expectedHumanAge: 3,
      },
      {
        catAge: 32, expectedHumanAge: 4,
      },
      {
        catAge: 36, expectedHumanAge: 5,
      },
      {
        catAge: 40, expectedHumanAge: 6,
      },
      {
        catAge: 44, expectedHumanAge: 7,
      },
    ];

    for (const i of catCases) {
      const catAge = i.catAge;
      const dogAge = 0;
      const expected = [i.expectedHumanAge, 0];

      const actual = getHumanAge(catAge, dogAge);

      expect(actual).toEqual(expected);
    }
  });

  test('should correctly convert first 15 dog years', () => {
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
  });

  test('should correctly convert 24 dog years', () => {
    expect(getHumanAge(0, 24)).toEqual([0, 2]);
  });

  test('should correctly convert every 5 next dog years', () => {
    const dogCases = [
      {
        dogAge: 29, expectedHumanAge: 3,
      },
      {
        dogAge: 34, expectedHumanAge: 4,
      },
      {
        dogAge: 39, expectedHumanAge: 5,
      },
      {
        dogAge: 44, expectedHumanAge: 6,
      },
      {
        dogAge: 49, expectedHumanAge: 7,
      },
    ];

    for (const i of dogCases) {
      const catAge = 0;
      const dogAge = i.dogAge;
      const expected = [0, i.expectedHumanAge];

      const actual = getHumanAge(catAge, dogAge);

      expect(actual).toEqual(expected);
    }
  });
});
