"use strict"

let devMode = true;

const printTestResult = ({ testDescription, functionOutput, testPassed }) => {
	if(devMode){
		console.log(`${
    testPassed ? 'Your function did a GOOD WORK :)' : "Your function is NOT WORKING :|"
  }\n> ${
    !testDescription ? (testPassed ? 'no description' : "none, you're a *****") : testDescription
  }\n> ${
    testPassed ? 'The funtion returned' : 'The function does not return'
  }: ${functionOutput}
  `)
	}
}


const test = (testDescription, { functionToTesting, functionOutput }) => {
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
