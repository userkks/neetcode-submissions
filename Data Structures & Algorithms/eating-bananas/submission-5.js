class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = -Infinity;
    for (let p of piles) max = Math.max(max, p);
    let i = 1;
    let j = max;
    const getTime = (k) => {
        let sum = 0;
        for (let p of piles) {
            sum += Math.ceil(p / k);
        }
        return sum;
    }
    while (i < j) {
        const mid = Math.floor((i+j)/2);
        const t = getTime(mid);
        if (t <= h) j = mid;
        else i = mid + 1;

    }
    return i;
    }
}
