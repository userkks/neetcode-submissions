class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let prev = 2;
        let secondPrev = 1;
        if (n === 1) return secondPrev;
        if (n === 2) return prev;
        for (let i=3; i<=n; i++) {
            const temp = prev;
            prev += secondPrev;
            secondPrev = temp;
        }
        return prev;
    }
}
