// Find First Non-repeating character in string (Interview Question)

// Solution
function NonRepeating(str) {
  if (!str) return

  // first pass to store the frequency of Characters
  let freq = {}
  for (const key of str) {
    freq[key] = (freq[key] || 0) + 1
  }

  // second pass to check for first non-repeating character
  for (const key of str) {
    if (freq[key] === 1) {
      return key
    }
  }

  return null
}

let result = NonRepeating('aabbcdeff')

console.log(result)
