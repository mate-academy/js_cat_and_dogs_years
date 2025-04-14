'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 1 Human Age for cat and dog which contains 
  the Human Age of 15 years old cat and dog accordingly`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`should return 2 Human Age for cat and dog which contains 
  the Human Age of 24 years old cat and dog`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should return 3 Human Age for cat and 2 Human Age for dog which contains 
  the Human Age of 28 years old cat and dog`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`should return 3 Human Age for cat and dog which contains 
  the Human Age of 28 years old cat and 29 dog`, () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });
});
