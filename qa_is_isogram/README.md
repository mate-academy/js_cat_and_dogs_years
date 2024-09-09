# QA Is isogram ([uk](readme.uk.md))

An **isogram** is a word that has no repeating letters, consecutive or
non-consecutive.

Write a tests for the function `isIsogram` that takes a string `word`, that contains only
letters, and checks whether this word is an **isogram**.

Notes:

- for this task, the empty string is an **isogram**;
- function should be case-insensitive (`M` and `m` are considered the same letter).

Examples:

```js
isIsogram('playgrounds') === true
isIsogram('look') === false
isIsogram('Adam') === false
isIsogram('') === true
```

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

Read more about [Jest expectations](https://jestjs.io/uk/docs/expect).
