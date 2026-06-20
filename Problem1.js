//#region Non Repeating Character

// Problem Statement: Given a string str consisting of lowercase English Letters. return the first non-repeating character in str. If there is no non-repeating character, return '$'.

// Inputs:
// Input: s = "aabbcdeff" Output: 'c'
// Input: s = "racecar" Output: 'e'
// Input: s = "aabbccc" Output: '$'

// Solution
// function NonRepeating(str) {
//   if (!str) return

//   // first pass to store the frequency of Characters
//   let freq = {}
//   for (const key of str) {
//     freq[key] = (freq[key] || 0) + 1
//   }

//   // second pass to check for first non-repeating character
//   for (const key of str) {
//     if (freq[key] === 1) {
//       return key
//     }
//   }

//   return '$'
// }
// let result = NonRepeating('aabbcdeff')
// console.log(result)

// Trap : (if they asked index of the first character or element)
//solution:  simply we run a replace (for..of) with (for loop) in second pass and return i;

// function NonRepeating(str) {
//   if (!str) return

//   // first pass to store the frequency of Characters
//   let freq = {}
//   for (const key of str) {
//     freq[key] = (freq[key] || 0) + 1
//   }

//   // second pass to check for first non-repeating character
//   for(let i = 0 ; i<= str.length-1; i++){
//     if(freq[str[i]] === 1){
//       return i
//     }
//   }

//   return -1
// }

// variation

//#region Non-Repeating Element

// Problem statement: Find the first non-repeating element in a given array arr of integers and if there is not present any non-repeating element then return 0

// Inputs
// Input: arr[] = [-1, 2, -1, 3, 2] Output: 3
// Input: arr[] = [1, 1, 1] Output: 0

// solution
function NonRepeatingElement(arr) {
  const freq = {}
  if (!arr) return

  for (const key of arr) {
    freq[key] = (freq[key] || 0) + 1
  }

  for (const key of arr) {
    if (freq[key] === 1) {
      return key
    }
  }

  return 0
}

const ResultElement = NonRepeatingElement([-1, -1, -1])
console.log(ResultElement)

// Note: last m kya return krna hai wo question ke hisab se rahenge, return according to that.
// It means:
// If the character has never been seen, start its count at 0, then add 1.
// If it already exists, use its current count and increment it by 1.
