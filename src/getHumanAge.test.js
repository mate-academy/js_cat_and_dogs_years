'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  it('should calc human years for ages below first threshold', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it('should calc human years for ages just before first threshold', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it('should calc human years for ages exactly at first threshold', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it('should calc human years for ages within first human year range', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  it('should calc human years for ages at start of next block', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it('should calc human years for ages within next block', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  it('should calc human years when one animal type crosses threshold', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  it('should calc human years for significantly larger animal ages', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
