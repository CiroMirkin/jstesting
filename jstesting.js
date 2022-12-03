"use strict"

const printTestResult = ({ testDescription, functionOutput, testPassed }) => {
  console.log(`-------------------------\n 
  ${
    !testDescription ? (testPassed ? 'n o n e' : "none, you're a *****") : testDescription
  }
  \n-------------------------\n${
  testPassed ? 'Your function did a good work :)\n> The funtion returned' : "Your function is not working :)\n> The function does not return"
  } ${functionOutput}
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

export default test