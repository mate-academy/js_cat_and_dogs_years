'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 0 human years for 0 cat and dog years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  // eslint-disable-next-line max-len
  test('should return cat age as the first element and dog age as the second element', () => {
    const result = getHumanAge(28, 28);

    expect(result[0]).toBe(3);
    expect(result[1]).toBe(2);
  });

  describe('Cat', () => {
    // 15

    test('should return 0 human years before reaching 15 cat years', () => {
      expect(getHumanAge(14, 0)[0]).toBe(0);
    });

    test('should return 1 human year when cat age reaches 15 years', () => {
      expect(getHumanAge(15, 0)[0]).toBe(1);
    });

    // 24

    test('should return 1 human year before reaching 24 cat years', () => {
      expect(getHumanAge(23, 0)[0]).toBe(1);
    });

    // eslint-disable-next-line max-len
    test('should return 2 human years when cat age reaches 24 years', () => {
      expect(getHumanAge(24, 0)[0]).toBe(2);
    });

    // 28

    test('should return 2 human years before reaching 28 cat years', () => {
      expect(getHumanAge(27, 0)[0]).toBe(2);
    });

    // eslint-disable-next-line max-len
    test('should return 3 human years when cat age reaches 28 years', () => {
      expect(getHumanAge(28, 0)[0]).toBe(3);
    });
  });

  describe('Dog', () => {
    // 15
    test('should return 0 human years before reaching 15 dog years', () => {
      expect(getHumanAge(0, 14)[1]).toBe(0);
    });

    test('should return 1 human year when dog age reaches 15 years', () => {
      expect(getHumanAge(0, 15)[1]).toBe(1);
    });

    // 24

    test('should return 1 human year when dog age reaches 15 years', () => {
      expect(getHumanAge(0, 23)[1]).toBe(1);
    });

    // eslint-disable-next-line max-len
    test('should return 2 human year when dog age reaches 15 years', () => {
      expect(getHumanAge(0, 24)[1]).toBe(2);
    });

    // 28

    // eslint-disable-next-line max-len
    test('should return 2 human years before reaching 28 cat years', () => {
      expect(getHumanAge(0, 28)[1]).toBe(2);
    });

    test('should return 3 human years when dog age reaches 29 years', () => {
      expect(getHumanAge(0, 29)[1]).toBe(3);
    });
  });
});
