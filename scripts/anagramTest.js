
// anagrams are dofferent words with same length and characters
function testAnagram() {
  let isAnagram;

  // get the values
  const word1 = document.getElementById("word1").value;
  const word2 = document.getElementById("word2").value;

  // reorder alphabetically (transform to array, sort then back to string)
  const orderedWord1 = word1.split('').sort().join('')
  const orderedWord2 = word2.split('').sort().join('')

  // as both word letters are sorted alphabetically compare, if are the same
  // means that is an anagram
  isAnagram = orderedWord1 === orderedWord2

  document.getElementById("anagramTestDiv").innerHTML = `Is anagram: ${isAnagram}`;
}