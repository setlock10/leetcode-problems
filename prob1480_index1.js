/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    const result = [];
    for (let i = 0; i<nums.length; i++){
        if (i!==0){
            result[i]=result[i-1] + nums[i]
        }
        else{
            result[i]=nums[i]
        }

    }
    return result;

};