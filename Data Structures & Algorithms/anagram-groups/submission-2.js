class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const freqMap = new Map();
        for(let s of strs) {
            const arr = new Array(26).fill(0);
            for (let l of s) {
                arr[l.charCodeAt()-97]++;
            }
            const key = arr.join(',');
            if (freqMap.has(key)) {
                freqMap.get(key).push(s);
            } else {
                freqMap.set(key, [s]);
            }
        }
        return [...freqMap.values()];
    }
}
