function getPossibleCombinations(numberOfPairs) {
  const combinations = [];
  const openSymbol = '(';
  const closedSymbol = ')';
  
  
  const possibilitiesWithNOpenPairs = (nOpenPairs) => {
    
    let closedCount = 0;
    let openedCount = 0;
    let lastSymbol

    let combination = ''
    openedCount = nOpenPairs;
    for (let y = 0; y < nOpenPairs; y++) { // draw first part
      combination += openSymbol;
      lastSymbol = openSymbol
    }
    
    for (let y = 0; y <= numberOfPairs; y++) { // test trailing combinations
      if(openedCount > closedCount) {
        combination += closedSymbol;
        closedCount += 1
        lastSymbol = closedCount
      }
      if((lastSymbol === closedCount) && (openedCount < numberOfPairs)) {
        combination += openSymbol;
        lastSymbol = openSymbol
        openedCount += 1
      }
    }

    return combination

  };

  //  check with starting opened pairs possibilities numberOfPairs, ...3, 2, 1.
  for (let i = 0; i < (numberOfPairs) ; i++) { 
    console.log(
      numberOfPairs , i,
      numberOfPairs - i,
      possibilitiesWithNOpenPairs(numberOfPairs - i)
    );
  //  possibilitiesWithNOpenPairs(3)
  }  



  document.getElementById("parenthesisDiv").innerHTML = combinations;

}