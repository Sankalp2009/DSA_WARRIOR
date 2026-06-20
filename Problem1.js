// Find First Non-repeating character in string (Interview Question)

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

//   return null
// }

let result = NonRepeating('aabbcdeff')

console.log(result)

// Variation (if they asked index of the first character or element)
//solution:  simply we run a replace (for..of) with (for loop) in second pass and return i;

function NonRepeating(str) {
  if (!str) return

  // first pass to store the frequency of Characters
  let freq = {}
  for (const key of str) {
    freq[key] = (freq[key] || 0) + 1
  }

  // second pass to check for first non-repeating character
  for(let i = 0 ; i<= str.length-1; i++){
    if(freq[str[i]] === 1){
      return i
    }
  }

  return -1
}

// Note: last m kya return krna hai wo question ke hisab se rahenge, return according to that.
// It means:
// If the character has never been seen, start its count at 0, then add 1.
// If it already exists, use its current count and increment it by 1.