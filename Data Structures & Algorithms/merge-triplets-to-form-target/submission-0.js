class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let cur = [-Infinity, -Infinity, -Infinity];
        for (let i = 0; i < triplets.length; i++) {
            const t = triplets[i];
            if (t[0] <= target[0] && t[1] <= target[1] && t[2] <= target[2]) {
                cur = [Math.max(cur[0], t[0]), Math.max(cur[1], t[1]), Math.max(cur[2], t[2])];
            }
        }
        if (cur[0] === target[0] && cur[1] === target[1] && cur[2] === target[2]) return true;
        return false;
    }
}
