  // You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank. Return the wealth that the richest customer has.
  //
  // Pseudocode
  //
  // sum <- 0
  // for i = 0, i < accounts.length, i++
  //    max <- 0
  //    for j = 0, j < accounts[i].length, j++
  //       sum += accounts[i][j]
  //    if sum > max
  //       max = sum
  //
  // return max

  let max = 0;

  for (let i = 0; i < accounts.length; i++){
    let sum =0;
    for (let j = 0; j < accounts[i].length; j++){
      sum += accounts[i][j];        
      }
    if (sum > max){
      max = sum;
    }
    }
  return max;
  
  
