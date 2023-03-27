const twoSums = (nums: number[], target: number): number[] => {
    const map = new Map();

    console.log(map)
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(num, i);
        console.log(map)
    }
    return [];
}

console.log(twoSums([2, 7, 11, 15], 9));