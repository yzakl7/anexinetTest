// the function will first get first and second arguments (arrays)
// and obtain the common elements then will push non evaluated args 
// into a new array to pass them as subsequent arguments to the same 
// recursive function pasing calculated common elements as first argument
function getCommonElements() {
  const args = arguments.length 
  const argumentsLeft = []

  for (let i = 2; i < args; i++) {
    const _args = arguments.length -(args - i) 
    argumentsLeft.push(arguments[_args]);
  }

  if ( args > 1) { 
    // more than 1 argument means the function will repeat until havin 
    // one single common elements array
    const filteredArray = arguments[0].filter((value) => {
      return (arguments[1].includes(value))
    });
    getCommonElements(filteredArray, ...argumentsLeft)
  } else {
    // if only 1 argument, print the results
    document.getElementById("commonElementsDiv").innerHTML = arguments[0];
  }
}
