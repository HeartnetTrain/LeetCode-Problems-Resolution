"""
219. Contains Duplicate II
Pattern: Sliding Window / Hash Set

Problem Description:
Given an integer array nums and an integer k, return true if there are two 
distinct indices i and j in the array such that nums[i] == nums[j] 
and abs(i - j) <= k.

Example 1:
    Input: nums = [1,2,3,1], k = 3
    Output: true

Constraints:
    1 <= nums.length <= 10^5
    -10^9 <= nums[i] <= 10^9
    0 <= k <= 10^5
"""
class Solution:
    def containsNearbyDuplicate(self, nums: list[int], k: int) -> bool:
        seen = {}  # Dictionary to store {value: last_index}
        
        for i, num in enumerate(nums):
            # If we've seen this number before and indices are within k
            if num in seen and i - seen[num] <= k:
                return True
            # Update/Store the latest index of this number
            seen[num] = i
        
        return False

