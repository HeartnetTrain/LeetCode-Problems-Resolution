var twoSum = function(nums, target) {
  var map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];
    if (map.get(remaining) && map.get(remaining) != i)
      return [i, map.get(remaining)];
  }
};
console.log(twoSum([8, 15, 0, 15, 60], 30));

/* nums = [2,4,3] and target = 6 */
/* nums = [3,3] and target = 6 */
/* nums = [1,5,7] and target = 8 */
/* nums = [8, 15, 0,15,60] and target = 30 */
