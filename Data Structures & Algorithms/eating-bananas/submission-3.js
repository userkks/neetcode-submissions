class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = -1;
        for (let i=0; i<piles.length; i++) {
            if (piles[i] > max) max = piles[i];
        }
        const checkTime = (p) => {
            const timeMap = piles.map(i => Math.ceil(i/p));
            return timeMap.reduce((cur, acc) => acc + cur, 0);
        }
        let i = 1;
        let j = max;
        while (i < j) {
            const mid = Math.floor((i+j)/2);
            const temp = checkTime(mid);
            if (temp > h) i = mid + 1;
            else j = mid;
        }
        return i;
    }
}
