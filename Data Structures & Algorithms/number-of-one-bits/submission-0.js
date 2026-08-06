class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let res = 0;
        while (n) {
            n &= n - 1;
            res++;
        }
        return res;
    }
}
