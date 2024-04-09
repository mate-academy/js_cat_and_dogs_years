'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('getHumanAge should return human age of a cat', () => {
    expect(getHumanAge(0, 0)[0]).toBe(0);
    expect(getHumanAge(14, 14)[0]).toBe(0);
    expect(getHumanAge(15, 15)[0]).toBe(1);
    expect(getHumanAge(23, 23)[0]).toBe(1);
    expect(getHumanAge(24, 24)[0]).toBe(2);
    expect(getHumanAge(27, 27)[0]).toBe(2);
    expect(getHumanAge(28, 28)[0]).toBe(3);
    expect(getHumanAge(100, 100)[0]).toBe(21);
  });

  test('getHumanAge should return human age of a dog', () => {
    expect(getHumanAge(0, 0)[1]).toBe(0);
    expect(getHumanAge(14, 14)[1]).toBe(0);
    expect(getHumanAge(15, 15)[1]).toBe(1);
    expect(getHumanAge(23, 23)[1]).toBe(1);
    expect(getHumanAge(24, 24)[1]).toBe(2);
    expect(getHumanAge(27, 27)[1]).toBe(2);
    expect(getHumanAge(28, 28)[1]).toBe(2);
    expect(getHumanAge(100, 100)[1]).toBe(17);
  });
});
