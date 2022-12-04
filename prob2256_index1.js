
function mad(nums){
    const hashFirst = new Map;
    const hashLast = new Map;
    const n = nums.length;
    
    for (let i = 0; i < n; i++){
      let sum = 0;
      let count =0
      for (let j = 0; j <i+1; j++){
        count++;
        sum += nums[j];      
      }
      hashFirst[i] = Math.floor(Math.abs(sum/count));
  
      count = 0;
      sum = 0;
      for (let k = i + 1; k < n; k++){
        count++;
        sum += nums[k];
      }
      hashLast[i] = Math.floor(Math.abs(sum/count));
  
    }
    hashLast[n-1] = 0;
  
    
    let min =Math.abs(hashFirst[0] - hashLast[0]);
    let result =0;
    for (let i = 1; i < n; i++){
      
      if (Math.abs(hashFirst[i] - hashLast[i]) < min){
        result = i;
        min = Math.abs(hashFirst[i] - hashLast[i]);
      }
        
    }
      
  
    
    console.log(hashFirst, hashLast);
  
  
  
  
    
    return result;
  
    
  
  }
  
  
  
  const nums = [2,5,3,9,5,3];
  
  let r = mad(nums);
  
  
  