function highestPalindrome(string, k) {
 const n = string.length;

 function isPalindrome(str) {
  return str === str.split('').reverse().join('');
 }

 function createPalindrome(str, k, left, right) {
  if (left >= right) {
   if (isPalindrome(str)) return str;
   return '-1';
  }

  if (str[left] === str[right]) {
   return createPalindrome(str, k, left + 1, right - 1);
  } else if (k > 0) {
   let replaceLeft = str.substr(0, left) + str[right] + str.substr(left + 1);
   let replaceRight = str.substr(0, right) + str[left] + str.substr(right + 1);

   let result1 = createPalindrome(replaceLeft, k - 1, left + 1, right - 1);
   let result2 = createPalindrome(replaceRight, k - 1, left + 1, right - 1);

   if (result1 === '-1' && result2 === '-1') return '-1';
   if (result1 === '-1') return result2;
   if (result2 === '-1') return result1;

   return result1 > result2 ? result1 : result2;
  } else {
   return '-1';
  }
 }

 return createPalindrome(string, k, 0, n - 1);
}

console.log(highestPalindrome("3943", 1));
console.log(highestPalindrome("932239", 2));
