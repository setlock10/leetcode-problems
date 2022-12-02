
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if (diff in hashMap){
            return [hashMap[diff], i]
        }else {
            hashMap[nums[i]] = i;
        }
    }


};