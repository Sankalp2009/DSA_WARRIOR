// Problem Statement: Find first and second largest element in an array and sum
//input = [12, 35, 1, 10, 34, 1]

// Two Pass approach
// function secondLargestsum(arr) {
//   if (!arr) return

//   let Max1 = -Infinity
//   let Max2 = -Infinity

//   // one pass for collecting first max
//   for (const key of arr) {
//     if (key > Max1) {
//       Max1 = key
//     }
//   }
  
//   // second pass to store second largest
//   for (const key of arr) {
//     if (key > Max2 && key != Max1) {
//       Max2 = key
//     }
//   }

//   return (Max1 + Max2);

// }

// const result = secondLargestsum([12, 35, 1, 10, 34, 1])
// console.log(result)

// One Pass approach (Optimized)
function secondLargestsum(arr) {
  
  // check for empty, null, undefined
  if (!arr || arr.length < 2) return;

  let Max1 = -Infinity
  let Max2 = -Infinity

  // one pass approach
  for( const key of arr){
    // Max1 calculate, then Max2

    if(key > Max1){
      
      // The old largest (12) becomes the second largest.
      Max2 = Max1;
      
      // New value assisgned to Max1
      Max1 = key;
    
    } else if (key > Max2 && key !== Max1){
      
      Max2 = key
    
    }

  }

  return (Max1 + Max2);

}

const result = secondLargestsum([12, 35, 1, 10, 34, 1])
console.log(result)

// Max2 = Max1 (Matlab jo purani value hogi wo Max2 ki current bante jayegi jaise jaise loop chalega)