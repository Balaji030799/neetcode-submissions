class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length)return false;
        const alphabets = new Array(26).fill(0);
        for(let i=0;i<s.length;i++){
            alphabets[s[i].charCodeAt()-"a".charCodeAt()]++;
            alphabets[t[i].charCodeAt()-"a".charCodeAt()]--;
        }
        return alphabets.every(a=>a===0)
    }
}
