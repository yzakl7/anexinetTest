// this is kinda weird but, ive been asked to swap number whitout using variables
function swapValue(){
  // handlig values directly
  document.getElementById("swap").value = document.getElementById("swap").value.split('').reverse().join('');
}