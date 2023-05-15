import runTest from './utils'

function plusOne(digits: number[]): number[] {
  let carry = 1 // Initialize carry as 1
  const result: number[] = []

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry
    result.unshift(sum % 10) // Add the least significant digit to the front of the result array
    carry = Math.floor(sum / 10) // Update the carry
  }

  if (carry > 0) {
    result.unshift(carry) // If there's still a carry left, add it to the front of the result array
  }

  return result
}

plusOne([1, 2, 3])

runTest(plusOne, 'plusOne', [1, 2, 3])
runTest(plusOne, 'plusOne', [4, 3, 2, 1])
