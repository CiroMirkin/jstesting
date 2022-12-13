"use strict"

let devMode = true;

const printTestResult = ({ testDescription, functionOutput, testPassed }) => {
	console.log(`${testPassed ? 'Your function did a GOOD WORK :)' : "Your function is NOT WORKING :|"}\n`)
  console.log(`> ${!testDescription ? (testPassed ? 'no description' : "none, you're a *****") : testDescription}\n`)
  console.log(`> ${testPassed ? 'The funtion returned' : 'The function does not return'}: ${functionOutput}`)
}


const test = (testDescription, { functionToTesting, functionOutput }) => {
  if(!devMode) return true

  if(typeof functionToTesting == 'object' || typeof functionOutput == 'object') {
    if(`${functionToTesting}` == `${functionOutput}`) {
      printTestResult({
        testDescription, functionOutput, testPassed: true
      })
      return true
    }
  }
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
