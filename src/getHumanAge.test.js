'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  const humanAgeMap = {
    0: [0, 0],
    14: [0, 0],
    15: [1, 1],
    23: [1, 1],
    24: [2, 2],
    27: [2, 2],
    28: [3, 2],
    100: [21, 17],
  };

  for (const key in humanAgeMap) {
    test(`result should be ${humanAgeMap[key]}`, () => {
      expect(getHumanAge(key, key)).toEqual(humanAgeMap[key]);
    });
  }
});
