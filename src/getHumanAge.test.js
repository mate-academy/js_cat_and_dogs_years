'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Should return zero if the first years > animalAge', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('Should return 1 value if the sum of first and second years > animalAge'
    , () => {
      expect(getHumanAge(23, 23))
        .toEqual([1, 1]);
    });

  test('Should return 0 value if dogsAge < 15', () => {
    expect(getHumanAge(15, 13))
      .toEqual([1, 0]);
  });

  test('Should return zero values if dogsAge and the catsAge are zero', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('Should return an equal years after converted to human years', () => {
    expect(getHumanAge(35, 20))
      .toEqual([4, 1]);
  });

  test('Should return an equal years for cats and dogs ages are the same'
    , () => {
      expect(getHumanAge(28, 28))
        .toEqual([3, 2]);
    });

  test('Should return an equal years for cats and dogs ages are hundred'
    , () => {
      expect(getHumanAge(100, 100))
        .toEqual([21, 17]);
    });
});
