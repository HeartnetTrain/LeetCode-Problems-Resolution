function twoSum(nums, target) {
  var map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [i, map.get(complement)]
    }
    map.set(nums[i], i);
  }
};

/* 
nums = [2,4,3] and target = 6 => output is [0,1]
nums = [3,3] and target = 6 => output is [0,1]
nums = [1,5,7] and target = 8 => output is [0,2]
nums = [8, 15, 0,15,60] and target = 30 => output is [1,3]
*/

