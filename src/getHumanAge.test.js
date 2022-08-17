'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  it('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  it('should return zeros if ages of a cat and a dog = 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  it('should return zeros if ages of a cat and a dog < 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  it('should return 1 if ages of a cat and a dog = 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  it('should return 2 if ages of a cat and a dog = 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  it('should return 3 if cat`s age = 28  and dog`s age 29', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  it('should return 3 if cat`s age = 32 and dog`s age = 34', () => {
    expect(getHumanAge(32, 34))
      .toEqual([4, 4]);
  });

  it('should return 21 if cat`s age = 100 and 17 if dog`s age = 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
