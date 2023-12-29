'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be 0 if cat and dogs are 0', () => {
    const cat = 0;
    const dog = 0;
    const humans = [0, 0];

    expect(getHumanAge(cat, dog)).toBe(humans);
  });

  test('should be 0 if cat and dogs are 14', () => {
    const cat = 14;
    const dog = 14;
    const humans = [0, 0];

    expect(getHumanAge(cat, dog)).toBe(humans);
  });

  test('should be 1 if cat and dogs are 15', () => {
    const cat = 15;
    const dog = 15;
    const humans = [1, 1];

    expect(getHumanAge(cat, dog)).toBe(humans);
  });

  test('should be 1 if cat and dogs are 23', () => {
    const cat = 23;
    const dog = 23;
    const humans = [1, 1];

    expect(getHumanAge(cat, dog)).toBe(humans);
  });

  test('should be 2 if cat and dogs are 24', () => {
    const cat = 24;
    const dog = 24;
    const humans = [2, 2];

    expect(getHumanAge(cat, dog)).toBe(humans);
  });

  test('should be 2 if cat and dogs are 27', () => {
    const cat = 27;
    const dog = 27;
    const humans = [2, 2];

    expect(getHumanAge(cat, dog)).toBe(humans);
  });

  test('should be 3 and 2 if cat and dogs are 28', () => {
    const cat = 27;
    const dog = 27;
    const humans = [3, 2];

    expect(getHumanAge(cat, dog)).toBe(humans);
  });

  test('should be 21 and 7 if cat and dogs are 100', () => {
    const cat = 100;
    const dog = 100;
    const humans = [21, 7];

    expect(getHumanAge(cat, dog)).toBe(humans);
  });
});
