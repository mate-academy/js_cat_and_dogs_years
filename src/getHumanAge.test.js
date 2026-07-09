'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('Should return zeros for initial value  <= 14 years', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('Should return ones for initial value 15 >= 24 years', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test('It must be different for more than 27', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test('should correctly calculate human age for older animals 100 years', ()
    => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
