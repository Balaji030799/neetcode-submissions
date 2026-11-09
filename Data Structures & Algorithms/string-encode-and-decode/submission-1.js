class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        strs.forEach((val, index) => {
            strs[index] = `${val.length}#` + val;
        });
        return JSON.stringify(strs);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const parsed = JSON.parse(str);
        parsed.forEach((val, index) => {
            const delimit = val.indexOf('#')+1;
            parsed[index] = val.slice(delimit);
        });
        return parsed;
    }
}
