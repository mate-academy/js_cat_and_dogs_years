'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be return current array [0, 0]  for input data(0, 0)', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should be return current array [0, 0]  for input data (14, 14)', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should be return current array [1, 1]  for input data (15, 15)', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should be return current array [1, 1]  for input data (16, 16)', () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);
  });

  test('should be return current array [1, 1]  for input data (23, 23)', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should be return current array [2, 2]  for input data (24, 24)', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should be return current array [2, 2]  for input data (25, 25)', () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  test('should be return current array [2, 2]  for input data (27, 27)', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should be return current array [3, 2]  for input data (28, 28)', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should be return current array [3, 3]  for input data (29, 29)', () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });
});
