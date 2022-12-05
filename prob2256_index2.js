
function mad(nums){
  const hashFirst = new Map;
  const hashLast = new Map;
  const n = nums.length;
  let min = 0;
  let result = 0;

  for (let i = 0; i < n; i++) {
    let sumFirst = 0;
    let sumLast = 0;
    let countFirst = 0;
    let countLast = 0;
    //new loop
    for (let j = 0; j < n; j++) {
      if (j < i + 1) {
        countFirst++;
        sumFirst += nums[j];
      }

      if (j >= i + 1) {
        countLast++;
        sumLast += nums[j];
      }
    }
    
    hashFirst[i] = Math.floor(Math.abs(sumFirst / countFirst));
    hashLast[i] = Math.floor(Math.abs(sumLast / countLast));
    hashLast[n - 1] = 0;
  
    if (i === 0) {
      min = Math.abs(hashFirst[0] - hashLast[0]);
    }
    else {
      if (Math.abs(hashFirst[i] - hashLast[i]) < min) {
        result = i;
        min = Math.abs(hashFirst[i] - hashLast[i]);
      }
    }

  }
  
  console.log(hashFirst, hashLast);

  return result;

  
  }
  
  
  
  const nums = [2,5,3,9,5,3];
  
  let r = mad(nums);
  
  
  