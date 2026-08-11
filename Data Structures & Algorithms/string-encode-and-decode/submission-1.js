class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (let st of strs) {
            res += `${st.length}#${st}`;
        }
        return res;
     }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0;
        let start = 0;
        const res = [];
        while (i<str.length) {
            if (str[i] === '#') {
                const len = Number(str.slice(start, i));
                res.push(str.slice(i+1, i+1+len));
                start = i+1+len;
                i = i+len;
            }
            i++;
        }
        return res;
    }
}
