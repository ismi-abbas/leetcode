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

function runningSumsMap(nums: number[]) {
  let result: number = 0
  return nums.map(item => (result += item))
}

function runningSum3(nums: number[]): number[] {
  let res: number[] = []
  if (nums.length == 0) return res
  res[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] + nums[i]
  }

  return res
}

runTest(runningSum, 'forLoop', [1, 2, 3, 4])
runTest(runningSumsMap, 'hashMap', [1, 2, 3, 4])
runTest(runningSum3, 'forLoop', [1, 2, 3, 4])
