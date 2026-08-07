class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let res = 0;
        while (x) {
            const l = x % 10;
            x = Math.trunc(x/10);
            res = res * 10 + l;
        }
        if (res < (-2) ** 31 || res >= 2 ** 31) return 0;
        return res;
    }
}
