// Construct a function union that compares input arrays and returns a new
// array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!

// Extension 4

function union(arrays) {
  const args = [...arguments]
  let results = new Set(args[0]);
  for (let i = 1; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      results.add(args[i][j]);
    }
  }
  //console.log(arguments[1])
  return results;
}

console.log(union([5,10,15], [15,88,1,5,7],[100, 15, 10, 1, 5]));
// should log: [5,10,15,88,1,7,100]
