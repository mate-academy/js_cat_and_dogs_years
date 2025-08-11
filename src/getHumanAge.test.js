'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be return 0', () => {
    const result = getHumanAge(0, 0);

    expect(result)
      .toEqual([0, 0]);
  });

  test('should be have expected values', () => {
    const result = getHumanAge(100, 100);

    expect(result)
      .toEqual([21, 17]);
  });

  test('should be return [2, 2] with such arguments (27, 27))', () => {
    const result = getHumanAge(27, 27);

    expect(result)
      .toEqual([2, 2]);
  });
});
