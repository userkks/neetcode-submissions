class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const findTime = (k) => {
            let total = 0;
            for (let p of piles) {
                total += Math.ceil(p / k);
            }
            return total;
        };
        let j = piles.reduce((acc, cur) => Math.max(acc, cur), -Infinity);
        let i = 1;
        while (i < j) {
            const mid = Math.floor((i + j) / 2);
            const temp = findTime(mid);
            if (temp > h) i = mid + 1;
            else j = mid;
        }
        return j;
    }
}
