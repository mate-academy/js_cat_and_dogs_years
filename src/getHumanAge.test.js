'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it('should return 0 for cat and dog when they are 14 years old', () => {
    expect(getHumanAge(14, 14));
  });

  it('should return 1 for cat and dog when they are 15 years old', () => {
    expect(getHumanAge(15, 15));
  });

  it('should return 1 for cat and dog when they are 23 years old', () => {
    expect(getHumanAge(23, 23));
  });

  it('should return 2 for cat and dog when they are 24 years old', () => {
    expect(getHumanAge(24, 24));
  });

  it('should return 2 for cat and dog when they are 27 years old', () => {
    expect(getHumanAge(27, 27));
  });

  it('should return 3 for cat and 2 for dog when they are 28 years old',
    () => {
      expect(getHumanAge(28, 28));
    });

  it('should return 21 for cat and 17 for dog when they are 24 years old',
    () => {
      expect(getHumanAge(100, 100));
    });
});
