// Function to print next x leap years, where x is taken from param leapYearsCounter
function getLeapYears(leapYearsCounter) {
  const nextYear = new Date().getFullYear() + 1
  const daysInFebruary = (evaluatedYear) => new Date(evaluatedYear, marchIndex, 0).getDate()
  const leapYearsArray = []
  const marchIndex = 2 // month array index starts at 0
  let evaluatedYear = parseInt(nextYear, 10); // starting next year
  
  for (let i = 0; i < leapYearsCounter; ) {
    let getDaysInFebruary = parseInt( daysInFebruary(evaluatedYear), 10); // to get day before march 1 (February last day)
    const isLeap = getDaysInFebruary > 28;
    if ( isLeap ) {
      leapYearsArray.push(evaluatedYear)
      i += 1
    }
    evaluatedYear += 1
  }
  document.getElementById("leapYearDiv").innerHTML = leapYearsArray;
}