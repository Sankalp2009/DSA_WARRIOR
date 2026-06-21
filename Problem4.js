//#region Check if array contains duplicates

// Problem Statement: Given an integer array arr[], check if the array contains any duplicate value.
// input = [1, 2, 3, 2]
// solution

function checkDuplicates(arr){
   if(!arr || arr.length === 0) return;

  let freq = {};

  for (const key of arr){
      freq[key] = (freq[key] || 0) + 1;
      
      if(freq[key] > 1){
          return true;
      }
  }
 
  return false;
  
}

const result = checkDuplicates( [1, 2, 3, 2])
console.log(result);