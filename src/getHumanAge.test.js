'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Should return 0 value if catsAge < 15', () => {
    expect(getHumanAge(14, 15))
      .toEqual([0, 1]);
  });

  test('Should return 0 value if dogsAge < 15', () => {
    expect(getHumanAge(15, 13))
      .toEqual([1, 0]);
  });

  test('Should return 0 values if dogsAge === 0 and catsAge === 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('Should return an equal years after converted to human years', () => {
    expect(getHumanAge(35, 20))
      .toEqual([4, 1]);
  });

  test('Should return different human ages for the same cats and dogs', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('Should return different human ages for the same cats and dogs', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
