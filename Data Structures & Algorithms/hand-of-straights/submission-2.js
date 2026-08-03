class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize) return false;
        const freq = new Map();
        hand.sort((a, b) => a - b);
        for (let i = 0; i < hand.length; i++) {
            freq.set(hand[i], (freq.get(hand[i]) || 0) + 1)
        }
        for (let card of hand) {
            if (freq.get(card) === 0) continue;
            for (let i = card; i < card + groupSize; i++) {
                if ((freq.get(i) || 0) === 0) {
                    return false;
                }
                freq.set(i, freq.get(i) - 1);
            }
        }
        return true;
    }
}
