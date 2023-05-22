'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zeros if input ages are less than 15', () => {
    const actual = getHumanAge(0, 12);
    const expected = [0, 0];

    expect(actual)
      .toEqual(expected);
  });

  test('should return [1, 1] if input between 15 and 24(not included)', () => {
    const actual = getHumanAge(16, 23);
    const expected = [1, 1];

    expect(actual)
      .toEqual(expected);
  });

  test('should return [2, 2] if inputs between 24 and 28(not included)', () => {
    const actual = getHumanAge(25, 27);
    const expected = [2, 2];

    expect(actual)
      .toEqual(expected);
  });

  test('should count plus 1 year every 4 next cat years after 24', () => {
    const actual = getHumanAge(28, 28);
    const expected = [3, 2];

    expect(actual)
      .toEqual(expected);
  });

  test('should count plus 1 year every 5 next dog years after 24', () => {
    const actual = getHumanAge(28, 29);
    const expected = [3, 3];

    expect(actual)
      .toEqual(expected);
  });

  test('should return [21, 27] if cat and dog are 100 years old', () => {
    const actual = getHumanAge(100, 100);
    const expected = [21, 17];

    expect(actual)
      .toEqual(expected);
  });
});
