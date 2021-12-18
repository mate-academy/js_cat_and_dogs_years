/* eslint-disable strict */
describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return array with two values', () => {
    const actual = getHumanAge(14, 14);

    expect(actual)
      .toHaveLength(2);
  });

  test('should return only a full year number', () => {
    const actual = getHumanAge(15, 14);

    expect(actual)
      .toStrictEqual([1, 0]);
  });

  test('should return correct result', () => {
    const actual = getHumanAge(100, 100);

    expect(actual)
      .toStrictEqual([21, 17]);
  });
});
