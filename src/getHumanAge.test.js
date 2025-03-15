'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test(
    'should return 0 for the human age if the catAge or the dogAge ' +
      'is less than 15',
    () => {
      const humanAge = getHumanAge(12, 10);
      expect(humanAge).toEqual([0, 0]);
    }
  );

  test(
    'should return 1 for the human age if the catAge or the dogAge ' +
      'is more than 15',
    () => {
      const humanAge = getHumanAge(16, 10);
      expect(humanAge).toEqual([1, 0]);
    }
  );
});
