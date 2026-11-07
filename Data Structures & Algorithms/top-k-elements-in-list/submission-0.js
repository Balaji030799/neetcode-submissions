class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
  topKFrequent(nums, k) {
    const frequency = {};

    for (let num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    const entries = Object.entries(frequency);

    const sortedDesc = entries
        .sort((a, b) => b[1] - a[1])
        .slice(0, k);

    const sortedScoresDes = Object.fromEntries(sortedDesc);

    return Object.keys(sortedScoresDes).map(Number);
}
}
