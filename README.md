Write a tests for the function `getHumanAge` which accepts two integers `catAge` and `dogAge` and converts 'animal' age into 'human' age. The function returns an array, where the first element is 'human' age of the cat and the second element is 'human' age of the dog. 

There is the rules how calculate the 'human' age:
```
Cat age:
15 human years for first cat year
+9 human years for second cat year
+4 human years for each cat year after that

Dog age:
15 human years for first dog year
+9 human years for second dog year
+5 human years for each dog year after that
```

Examples:
```
getHumanAge(9, 8) === [0, 0]
getHumanAge(15, 24) === [1, 2]
getHumanAge(28, 44) === [3, 6]
```

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

Read more about [Jest expectations](https://jestjs.io/uk/docs/expect)