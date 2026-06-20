// Problem Statement: Remove duplicates from array of object

// Input: const arr = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 1, name: "John" },
//   { id: 3, name: "Bob" }
// ];

function removeDuplicatesArrOfObj(arr) {
  if (!arr || arr.length < 2) return
  
  // Filter + findIndex approach(less efficient for large arrays O(n2))
  // const unique = arr.filter((el, i, arr) => {
  //   return i === arr.findIndex(item => item.id === el.id && item.name.toLowerCase() === el.name.toLowerCase());
  // })
  
  // Map Approach Efficient O(n) 
  
  const unique = [
    ...new Map(arr.map(item => [item.id, item])).values()
  ]

  return unique
}

const result = removeDuplicatesArrOfObj([
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' },
  { id: 3, name: 'Bob' },
])
console.log(result)