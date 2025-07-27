'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0, if pet`s age equal 0 years', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('shold return 0, if pet`s age less then 15 years', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('shold return 1, if pet`s age equal 15 years', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('shold return 1, if pet`s age less then 24 years', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('shold return 2, if pet`s age equal 24 years', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('shold return 2, if pet`s age equal 27 years', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  /* eslint-disable-next-line max-len */
  test('shold return 3 years for cat`s age and 2 years for dog`s age, if ages equal 28 years',
    () => {
      expect(getHumanAge(28, 28))
        .toEqual([3, 2]);
    });

  test('shold return 3, if pet`s age equal 29 years', () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });

  /* eslint-disable-next-line max-len */
  test('shold return 21 years for cat`s age and 17 years for dog`s age, if ages equal 100 years',
    () => {
      expect(getHumanAge(100, 100))
        .toEqual([21, 17]);
    });
});
