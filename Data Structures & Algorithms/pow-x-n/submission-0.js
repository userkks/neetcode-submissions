class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(v, p) {
        const power = (x, n) => {
            if (n === 0) return 1;
            if (n < 0) { x = 1 / x; n = -n}
            const half = power(x, Math.floor(n/2));
            if (n%2) {
                return x * half * half;
            } else return half * half;
        }
        return power(v, p);
    }
}
