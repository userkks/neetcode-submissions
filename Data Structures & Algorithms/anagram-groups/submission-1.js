class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const memory = new Map();
        const getKey = (s) => {
            const arr = new Array(26).fill(0);
            for (let l of s) {
                const pos = l.charCodeAt() - 97;
                arr[pos]++;
            }
            return arr.join("#");
        };
        for (let st of strs) {
            const key = getKey(st);
            if (memory.has(key)) {
                memory.get(key).push(st);
            } else memory.set(key, [st]);
        }
        return [...memory.values()];
    }
}
