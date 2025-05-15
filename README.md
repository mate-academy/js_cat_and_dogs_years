# QA Cat and Dog years ([uk](readme.uk.md))

Write tests for `getHumanAge` function that takes two integers `catAge` (my
cat's age in **cat** years) and `dogAge` (my dog's age in **dog** years) and
returns an array where:

- the first element is my cat's age in **human** years
- the second element is my dog's age in **human** years

As usually age is a whole number of years (discard the remainder)

**Cat** years are converted to **human** years following the next rules:

- First 15 **cat** years give 1 **human** year
- the next 9 **cat** years give 1 more **human** year
- every 4 next **cat** years give 1 extra **human** year

**Dog** years:



- First 15 **dog** years give 1 **human** year
- the next 9 **dog** years give 1 more **human** year
- every 5 next **dog** years give 1 extra **human** year

Examples:


```js
getHumanAge(0, 0) === [0, 0]
getHumanAge(14, 14) === [0, 0]
getHumanAge(15, 15) === [1, 1]
getHumanAge(23, 23) === [1, 1]
getHumanAge(24, 24) === [2, 2]
getHumanAge(27, 27) === [2, 2]
getHumanAge(28, 28) === [3, 2]
getHumanAge(100, 100) === [21, 17]
```

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

Read more about [Jest expectations](https://jestjs.io/uk/docs/expect).
