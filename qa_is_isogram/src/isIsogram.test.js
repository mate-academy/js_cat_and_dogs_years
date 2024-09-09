'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  it(
    'should return true for an empty string because an empty string '
    + 'has no repeating letters',
    () => {
      expect(isIsogram('')).toBe(true);
    }
  );

  it(
    'should return true for an isogram string like "playgrounds" '
    + 'because all letters are unique',
    () => {
      expect(isIsogram('playgrounds')).toBe(true);
    }
  );

  it(
    'should return false for a non-isogram string like "look" '
    + 'because the letter "o" is repeated',
    () => {
      expect(isIsogram('look')).toBe(false);
    }
  );

  it(
    'should return false for a non-isogram string like "Adam" '
    + 'because the letter "a" is repeated (case-insensitive)',
    () => {
      expect(isIsogram('Adam')).toBe(false);
    }
  );

  it(
    'should return true for a single letter string like "A"',
    () => {
      expect(isIsogram('A')).toBe(true);
    }
  );

  it(
    'should return false for a non-isogram string like "aAa"',
    () => {
      expect(isIsogram('aAa')).toBe(false);
    }
  );
});
