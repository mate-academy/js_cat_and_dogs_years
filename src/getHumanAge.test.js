'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    const result = getHumanAge(0, 0);

    expect(result)
      .toBeInstanceOf(Array);
  });

  test('should return an array with 2 elements', () => {
    const result = getHumanAge(0, 0);

    expect(result)
      .toHaveLength(2);
  });

  test('should return the correct value if'
  + 'less than 15 dogs year is passed', () => {
    const result = getHumanAge(19, 8);

    expect(result)
      .toEqual([1, 0]);
  });

  test('should return the correct value if'
    + 'less than 15 cats year is passed', () => {
    const result = getHumanAge(1, 16);

    expect(result)
      .toEqual([0, 1]);
  });

  test('should return the correct value if'
    + 'dogs age is >= 15 and < 24', () => {
    const result = getHumanAge(24, 17);

    expect(result)
      .toEqual([2, 1]);
  });

  test('should return the correct value if'
    + 'cats age is >= 15 and < 24', () => {
    const result = getHumanAge(20, 24);

    expect(result)
      .toEqual([1, 2]);
  });

  test('should return the correct value if'
    + 'cats and dogs years more than 24', () => {
    const result = getHumanAge(94, 73);

    expect(result)
      .toEqual([19, 11]);
  });
});
