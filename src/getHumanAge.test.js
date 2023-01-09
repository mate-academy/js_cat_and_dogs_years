'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zero if age < 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([ 0, 0 ]);
  });

  test('should return expected years for age < 24', () => {
    expect(getHumanAge(23, 23))
      .toEqual([ 1, 1 ]);
  });

  test('should return expected years for age > 24', () => {
    expect(getHumanAge(28, 28))
      .toEqual([ 3, 2 ]);
  });

  test('should return expected years for great age', () => {
    expect(getHumanAge(100, 100))
      .toEqual([ 21, 17 ]);
  });
});
