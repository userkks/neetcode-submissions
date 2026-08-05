class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const memory = new Set();
        while (true) {
            if (memory.has(n)) return false;
            memory.add(n);
            let temp = n;
            let sum = 0;
            while (temp) {
                const digit = temp%10;
                sum += digit * digit;
                temp = Math.floor(temp/10);
            }
            if (sum === 1) return true;
            n = sum;
        }
    }
}
