'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
  test('return array = 0 if function is empty', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });
  test('First 15 **cat** years give 1 **human** year', () => {
    expect(getHumanAge(0, 15))
      .toEqual([0, 1])
  });
  test('the next 9 **cat** years give 1 more **human** year', () => {
    expect(getHumanAge(0, 24))
      .toEqual([0, 2])
  });
  test('every 4 next **cat** years give 1 extra **human** year', () => {
    expect(getHumanAge(0, 30))
      .toEqual([0, 3])
  });
  test('cat\'s age does not equal to 1 human year', () => {
    expect(getHumanAge(0, 14))
      .toEqual([0, 0])
  })
  test('First 15 **dog** years give 1 **human** year', () => {
    expect(getHumanAge(0, 15))
      .toEqual([0, 1])
  });
  test('the next 9 **dog** years give 1 more **human** year', () => {
    expect(getHumanAge(0, 26))
      .toEqual([0, 2])
  });
  test ('every 5 next **dog** years give 1 extra **human** year', () => {
    expect(getHumanAge(0, 31))
      .toEqual([0, 3])
  });
  test('dog\'s age does not equal to 1 human year', () => {
    expect(getHumanAge(0, 10))
      .toEqual([0, 0])
  });
});
