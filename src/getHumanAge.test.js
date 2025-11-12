'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if cat and dog years < 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 9 year for 1 more human year', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 4 next year for cat and 1 extra human year', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(32, 32)).toEqual([4, 3]);
    expect(getHumanAge(36, 36)).toEqual([5, 4]);
    expect(getHumanAge(40, 40)).toEqual([6, 5]);
  });

  test('should return 5 next year for dog and 1 extra human year', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
    expect(getHumanAge(28, 34)).toEqual([3, 4]);
    expect(getHumanAge(28, 39)).toEqual([3, 5]);
    expect(getHumanAge(28, 44)).toEqual([3, 6]);
  });
});
