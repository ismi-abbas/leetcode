import runTest from './utils'

function runningSum(nums: number[]): number[] {
  let running_sums: number[] = []
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = 0; j <= i; j++) {
      sum += nums[j]
    }
    running_sums.push(sum)
  }
  return running_sums
}

runTest(runningSum, 'forLoop', [1, 2, 3, 4])
