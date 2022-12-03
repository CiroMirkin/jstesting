"use strict"

const printTestResult = ({ testDescription, functionOutput, testPassed }) => {
  console.log(`${
    testPassed ? 'Your function did a GOOD WORK :)' : "Your function is NOT WORKING :|"
  }\n> ${
    !testDescription ? (testPassed ? 'no description' : "none, you're a *****") : testDescription
  }\n> ${
    testPassed ? 'The funtion returned' : 'The function does not return'
  }: ${functionOutput}
  `)
}

const test = (testDescription, { functionToTesting, functionOutput }) => {
  if(functionToTesting === functionOutput) {
    printTestResult({
      testDescription, functionOutput, testPassed: true
    })
    return true
  }
  printTestResult({
      testDescription, functionOutput, testPassed: false
    })
  return false
}

const sum = (a, b) => a+b

test('', {
  functionToTesting: sum(2, 2), functionOutput: 4
})
test('Al sumar 10 mas quice el resultado es 15.', {
  functionToTesting: sum(10, 5), functionOutput: 15
})
