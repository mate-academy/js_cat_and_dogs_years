'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  it('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    const actual = getHumanAge(1, 1);

    expect(actual).toBeInstanceOf(Array);
  });

  it('should return an array with two elements', () => {
    const actual = getHumanAge(1, 1);

    expect(actual).toHaveLength(2);
  });

  it('should correctly convert cat and dog age to human age', () => {
    const actual = getHumanAge(100, 100);

    expect(actual).toEqual([21, 17]);
  });

  it('should correctly convert ages if there difference', () => {
    const actual = getHumanAge(27, 15);

    expect(actual).toEqual([2, 1]);
  });

  it('should return [0, 0] for ages less than conversion thresholds', () => {
    const actual = getHumanAge(0, 0);

    expect(actual).toEqual([0, 0]);
  });

  it(`should handle edge case where
  catAge and dogAge are exactly on the threshold`, () => {
    const actual = getHumanAge(15, 15);

    expect(actual).toEqual([1, 1]);
  });

  it('should handle negative ages (if applicable)', () => {
    const actual = getHumanAge(-1, -1);

    expect(actual).toEqual([0, 0]);
  });
});

describe('convertToHuman', () => {
  const { convertToHuman } = require('./getHumanAge');

  it('should be declared', () => {
    expect(convertToHuman)
      .toBeInstanceOf(Function);
  });

  it('should return a number', () => {
    const actual = convertToHuman(1, 1, 1, 1);

    expect(typeof actual).toBe('number');
  });

  it('should be age 0 if animal age < first', () => {
    const actual = convertToHuman(2, 3, 2, 1);

    expect(actual).toBe(0);
  });

  it('should be age 1 if animal age < first + second', () => {
    const actual = convertToHuman(2, 1, 2, 4);

    expect(actual).toBe(1);
  });

  it('should correctly convert animal age to human age', () => {
    const actual = convertToHuman(27, 15, 9, 5);

    expect(actual).toBe(2);
  });
});
