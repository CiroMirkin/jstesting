# jstesting

jstesting is a module for testing functions in Javascript.

```javascript
import test from '../jstesting.js'

const sum = (a, b) => a+b
```

```javascript
test('', {
  functionToTesting: sum(2, 2), functionOutput: 4
})

test('adds 10 + 5 to equal 15', {
  functionToTesting: sum(10, 5), functionOutput: 15
})
```

Result of test:

```
Your function did a GOOD WORK :)
> no description
> The funtion returned: 4
  
Your function did a GOOD WORK :)
> Al sumar 10 mas quice el resultado es 15.
> The funtion returned: 15
```