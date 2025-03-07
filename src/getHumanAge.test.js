'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should add zeros', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should add one human year', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should add one human year', () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);
  });

  test('should add one human year', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should add one more human year', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should add one more human year', () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  test('should add one more human year', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should add one exta for cats and one more for dogs human year', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should add one exta human year', () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });

  test('should add one exta human year', () => {
    expect(getHumanAge(30, 30))
      .toEqual([3, 3]);
  });
});
