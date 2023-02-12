const twoSum = (nums: Array<number>, target: number) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        if (i !== j) {
          return [i, j];
        }
      }
    }
  }
};

// T: O(n)
// S: O(n)

// using map data structure

const twoSumMap = (nums: Array<number>, target: number) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (map.has(compliment)) {
      return [i, map.get(compliment)];
    } else {
      map.set(nums[i], i);
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
console.log(twoSumMap([3, 2, 4], 6));

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSumMap([2, 7, 11, 15], 9));
