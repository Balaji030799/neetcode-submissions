class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {};
        for (let str of strs) {
            const alph = new Array(26).fill(0);
            for(let s of str){
                alph[s.charCodeAt(0)-'a'.charCodeAt(0)]+=1;
            }
            alph.join("");
            if(!obj[alph]){
                obj[alph] =[]
            }
            obj[alph].push(str)
        }
        return Object.values(obj);
    }
}
