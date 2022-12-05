var search = function(nums, target, count = 0) {
    //binary search with O(log n) complexity
    //if target in nums, return index of target
    //else return -1
  
    //pseudocode
    // set count <- 0 in function declaration
    // middle <- Math.floor (nums.length / 2)
    // if nums[middle] === target 
    //    return count + middle
    // if nums.length === 2 
    //    if nums[0] === target
    //      return count
    // if middle === 0
    //    return -1
    // if nums[middle] > target 
    //    return search (nums.slice(0,middle), target, count)
    // else
    //    search (nums.slice(middle, nums.length, target,count + middle))
    // end
  
    let middle = Math.floor (nums.length / 2);
    
    if (nums[middle] === target){
      return count + middle;
    }
  
    if (nums.length === 2){
      if (nums[0] === target){
        return count;
      }
      
    }
  
    if(middle === 0){
  //      if (nums[middle]!==target)
          return -1;
      
    }
  
    if (target < nums[middle]){
      return search(nums.slice(0,middle), target,count);
    }
    else{
      return search(nums.slice(middle,nums.length), target, count + middle);
    }
    
     
  };
  
  
  const nums = [-1,0,3,5,9,12];
  const target = 9;
  let r = search(nums, target);
  
  