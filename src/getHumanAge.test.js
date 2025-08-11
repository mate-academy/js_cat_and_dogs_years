'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array with zeros when input (0, 0)', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('both cat and dog are below the first human year threshold', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return an array with ones', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  // eslint-disable-next-line max-len
  test('should return an array with twos', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return an array where catToHuman > dogToHuman', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return an array when both animals are 100 years', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
