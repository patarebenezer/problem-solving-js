function WeightedStrings(string, weight) {
 let weightSet = new Set();
 let currentString = null;
 let currentWeight = 0;
 let count = 0;
 for (let index = 0; index < string.length; index++) {
  let char = string[index];
  let charWeight = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1
  if (char === currentString) {
   count++;
  } else {
   currentString = char;
   count = 1;
  }
  currentWeight = charWeight * count;
  weightSet.add(currentWeight)
 }
 return weight.map(data => weightSet.has(data) ? 'Yes' : 'No');
}

const queries = [1, 4, 9, 8]
const string = "abbcccd"
console.log(WeightedStrings(string, queries))

