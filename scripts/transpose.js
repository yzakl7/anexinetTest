// Write a function that receives a matrix and returns its transposed one.

const transpose = () => {
  /* inputs */
  x1 = document.getElementById("cell11").value;
  x2 = document.getElementById("cell12").value;
  x3 = document.getElementById("cell13").value;

  y1 = document.getElementById("cell21").value;
  y2 = document.getElementById("cell22").value;
  y3 = document.getElementById("cell23").value;

  z1 = document.getElementById("cell31").value;
  z2 = document.getElementById("cell32").value;
  z3 = document.getElementById("cell33").value;
  
  const inputMatrix = [[x1,x2,x3],[y1,y2,y3],[z1,z2,z3]]
  
  let [array] = inputMatrix

  /*
    map through the rows of the matrix ie matrix[0], matrix[1], matrix[2] 
    and we’re returning the row[column]
   */

  const transposed = array.map((value, column) => inputMatrix.map(row => row[column]))

  document.getElementById("tra1").innerHTML = transposed[0];
  document.getElementById("tra2").innerHTML = transposed[1];
  document.getElementById("tra3").innerHTML = transposed[2];
}
