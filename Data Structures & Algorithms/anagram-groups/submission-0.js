class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {};
        for (let str of strs) {
            const reveresed = str.split("").sort().join("");
            if (!obj[reveresed]) {
                obj[reveresed] = [];
            }
            obj[reveresed].push(str);
        }
        return Object.values(obj);
    }
}
