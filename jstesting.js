"use strict"

let devMode = true;

const printGreenTestResult = ({ testDescription, functionOutput }) => {
	console.log(`\nGOOD work\n`)
  console.log(`> ${!testDescription ? 'no description': testDescription}\n`)
  console.log(`> 'The funtion returned:' ${functionOutput}`)
}
const printRedTestResult = ({ testDescription, functionOutput }) => {
	console.log(`\nBAD work\n`)
  console.log(`> ${!testDescription ? "none, you're a *****": testDescription}\n`)
  console.log(`> 'The function doesnt return' ${functionOutput}`)
}

const test = (testDescription, { functionOutput, expectFunctionOutput }) => {
  if(!devMode) return true

  if(typeof functionOutput == 'object' || typeof expectFunctionOutput == 'object') {
    if(`${functionOutput}` == `${expectFunctionOutput}`) {
      printGreenTestResult({
        testDescription, expectFunctionOutput
      })
      return true
    }
  }
  if(functionOutput === expectFunctionOutput) {
    printGreenTestResult({
      testDescription, expectFunctionOutput
    })
    return true
  }
  printRedTestResult({
      testDescription, expectFunctionOutput
    })
  return false
}
