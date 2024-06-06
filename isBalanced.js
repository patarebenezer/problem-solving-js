function isBalanced(s) {
 const stack = [];
 const openingBrackets = ['(', '{', '['];
 const closingBrackets = [')', '}', ']'];
 const matchingBracket = {
  ')': '(',
  '}': '{',
  ']': '['
 };

 for (let char of s) {
  if (openingBrackets.includes(char)) {
   stack.push(char);
  } else if (closingBrackets.includes(char)) {
   if (stack.length === 0 || stack.pop() !== matchingBracket[char]) {
    return 'NO';
   }
  }
 }

 return stack.length === 0 ? 'YES' : 'NO';
}

console.log("{[()]} =>", isBalanced("{[()]}"));
console.log("{[(])} => ", isBalanced("{[(])}"));
console.log("{(([])[[]])[]} => ", isBalanced("{(([])[[]])[]}"));
