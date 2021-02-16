// in this case, We will let the user write the operation
// so that we can evaluate avoiding use of arithmetic operators
function evaluateMe() {
  const input = document.getElementById("evaluateMe").value;
  const evaluated = eval(input)
  document.getElementById("noSumDiv").innerHTML = eval(input);
  console.log({evaluated});
  
}