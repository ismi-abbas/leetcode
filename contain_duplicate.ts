import { isDuplicateTestData } from './data'
import runTest from './utils'

// this solution is not good as it is O(n^2)
function containsDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]

    for (let j = 0; j < nums.length; j++) {
      if (i !== j && element === nums[j]) {
        return true
      }
    }
  }
  return false
}

// this solution is better as it is O(n) - linear time - top voted solution on leetcode
function containsDuplicate2(nums: number[]): boolean {
  const set = new Set(nums)
  // because set will remove duplicate
  return set.size < nums.length
}

runTest(containsDuplicate, 'forLoop', isDuplicateTestData)
runTest(containsDuplicate2, 'use Set', isDuplicateTestData)
