"""
643. Maximum Average Subarray I
Pattern: Sliding Window (Fixed Size)

Problem Description:
You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum 
average value and return this value.

Example 1:
    Input: nums = [1,12,-5,-6,50,3], k = 4
    Output: 12.75000
    Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Constraints:
    n == nums.length
    1 <= k <= n <= 10^5
    -10^4 <= nums[i] <= 10^4
"""

class Solution:
    def findMaxAverage(self, nums: list[int], k: int) -> float:
        left = current_sum = 0
        max_sum = float('-inf')

        for right in range(len(nums)):
            current_sum += nums[right]
            if right - left + 1 == k:
                max_sum = max(current_sum, max_sum)
                current_sum -= nums[left]
                left +=1
        return max_sum / k



        