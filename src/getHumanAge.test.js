'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('zero zero', () => {
    expect(getHumanAge(0, 0)).toStrictEqual([0, 0]);
  });

  test('15 years', () => {
    expect(getHumanAge(15, 15)).toStrictEqual([1, 1]);
  })

  test('3 cat and dog years', () => {
    expect(getHumanAge(28, 29)).toStrictEqual([3, 3]);
  })

  test('100 animanl years to human years', () => {
    expect(getHumanAge(100, 100)).toStrictEqual([21, 17]);
  })
  })
