'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for zero ages', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(
    'should return [0, 0] for ages just ' + 'below the first threshold (14)',
    () => {
      expect(getHumanAge(14, 14)).toEqual([0, 0]);
    },
  );

  test(
    'should return [1, 1] when reaching ' + 'the first threshold (15)',
    () => {
      expect(getHumanAge(15, 15)).toEqual([1, 1]);
    },
  );

  test(
    'should return [1, 1] for ages just ' + 'below the second threshold (23)',
    () => {
      expect(getHumanAge(23, 23)).toEqual([1, 1]);
    },
  );

  test(
    'should return [2, 2] when reaching ' + 'the second threshold (24)',
    () => {
      expect(getHumanAge(24, 24)).toEqual([2, 2]);
    },
  );

  test('should handle cat and dog step ' + 'differences after 24 years', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should calculate correctly for ' + 'large ages', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
