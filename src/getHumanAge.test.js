'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return correct human age when dog and cats age is 0', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  // eslint-disable-next-line max-len
  test('should return correct human age when dog and cat age less then 15', () => {
    const result = getHumanAge(12, 13);

    expect(result).toEqual([0, 0]);
  });

  test('check correct estimate human age', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });
});
