"use strict"
const printGreenTestResult = ({ testDescription, expectFunctionOutput }) => {
	console.log(`\nGOOD work\n`)
  console.log(`> ${!testDescription ? 'no description': testDescription}\n`)
  console.log(`> 'The funtion returned:' ${expectFunctionOutput}`)
}
const printRedTestResult = ({ testDescription, expectFunctionOutput }) => {
	console.log(`\nAWFUL\n`)
  console.log(`> ${!testDescription ? "no description, you're a *****": testDescription}\n`)
  console.log(`> 'The function did'nt return:' ${expectFunctionOutput}`)
}

let devMode = true;
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
