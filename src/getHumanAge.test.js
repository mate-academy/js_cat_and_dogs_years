'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  // below are postive tests for EC and BV test designs
  // including different values=)
  test('check if 0, 0 inputs give 0,0 output', () => {
    const humanAges = getHumanAge(0, 0);

    expect(humanAges)
      .toEqual([0, 0]);
  });

  test('check if 14, 14 input give 0, 0 output', () => {
    const humanAges = getHumanAge(14, 14);

    expect(humanAges)
      .toEqual([0, 0]);
  });

  test('check if 15, 15 input give 1, 1 output', () => {
    const humanAges = getHumanAge(15, 15);

    expect(humanAges)
      .toEqual([1, 1]);
  });

  test('check if 16, 16 inputs give 1, 1 output', () => {
    const humanAges = getHumanAge(16, 16);

    expect(humanAges)
      .toEqual([1, 1]);
  });

  test('check if 24, 24 inputs give 2, 2 output', () => {
    const humanAges = getHumanAge(24, 24);

    expect(humanAges)
      .toEqual([2, 2]);
  });

  test('check if 25, 25 inputs give 2, 2 output', () => {
    const humanAges = getHumanAge(25, 25);

    expect(humanAges)
      .toEqual([2, 2]);
  });

  test('check if 28, 29 inputs give 3, 3 output', () => {
    const humanAges = getHumanAge(28, 29);

    expect(humanAges)
      .toEqual([3, 3]);
  });

  test('check if 29, 30 inputs give 3, 3 output', () => {
    const humanAges = getHumanAge(29, 30);

    expect(humanAges)
      .toEqual([3, 3]);
  });

  test('check if 58, 60 inputs give 6, 6 output', () => {
    const humanAges = getHumanAge(32, 35);

    expect(humanAges)
      .toEqual([4, 4]);
  });

  // below are some negative tests, (hope they check everything) =)
  test('check if symbols, letter inputs give NaN output', () => {
    const humanAges = getHumanAge('A#a', 'A#a');

    expect(humanAges)
      .toEqual([NaN, NaN]);
  });

  test('check if negative fractions inputs give 0, 0 output', () => {
    const humanAges = getHumanAge(-1.2, -1.2);

    expect(humanAges)
      .toEqual([0, 0]);
  });

  test('check if function accepts more than 2 arguments)', () => {
    const humanAges = getHumanAge(20, 20, 20);

    expect(humanAges)
      .toEqual([1, 1]);
  });

  test('check if function accepts blank input)', () => {
    const humanAges = getHumanAge();

    expect(humanAges)
      .toEqual([NaN, NaN]);
  });

  test('check if function accepts big number)', () => {
    const humanAges = getHumanAge(45345345345345345, 45345345345345345);

    expect(humanAges)
      .toEqual([11336336336336332, 9069069069069066,]);
  });
});
