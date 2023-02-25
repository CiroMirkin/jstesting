"use strict"

let devMode = true;

const printTestResult = ({ testDescription, functionOutput, testPassed }) => {
	console.log(`${testPassed ? 'Your function did a GOOD WORK :)' : "Your function is NOT WORKING :|"}\n`)
  console.log(`> ${!testDescription ? (testPassed ? 'no description' : "none, you're a *****") : testDescription}\n`)
  console.log(`> ${testPassed ? 'The funtion returned' : 'The function does not return'}: ${functionOutput}`)
}


const test = (testDescription, { functionOutput, expectFunctionOutput }) => {
  if(!devMode) return true

  if(typeof functionOutput == 'object' || typeof expectFunctionOutput == 'object') {
    if(`${functionOutput}` == `${expectFunctionOutput}`) {
      printTestResult({
        testDescription, expectFunctionOutput, testPassed: true
      })
      return true
    }
  }
  if(functionOutput === expectFunctionOutput) {
    printTestResult({
      testDescription, expectFunctionOutput, testPassed: true
    })
    return true
  }
  printTestResult({
      testDescription, expectFunctionOutput, testPassed: false
    })
  return false
}
