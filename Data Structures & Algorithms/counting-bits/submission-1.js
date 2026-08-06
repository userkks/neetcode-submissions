class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = [0];
        for (let i = 1; i <= n; i++) {
            const logi = Math.log2(i);
            const temp = i - Math.pow(2, Math.floor(logi));
            res.push(res[temp]+1);
        }
        return res;
    }
}
