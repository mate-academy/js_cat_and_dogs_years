'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should export a function', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  const testCases = [
    { ages: [0, 0], expected: [0, 0] },
    { ages: [14, 14], expected: [0, 0] },
    { ages: [15, 15], expected: [1, 1] },
    { ages: [23, 23], expected: [1, 1] },
    { ages: [24, 24], expected: [2, 2] },
    { ages: [27, 27], expected: [2, 2] },
    { ages: [28, 28], expected: [3, 2] },
    { ages: [100, 100], expected: [21, 17] },
  ];

  test.each(testCases)(
    'returns $expected for ages $ages',
    ({ ages, expected }) => {
      expect(getHumanAge(...ages)).toEqual(expected);
    }
  );
});
