class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        hand.sort((a, b) => a - b);
    const taken = new Array(hand.size).fill(false);
    if (hand.length % groupSize) return false;
    let takenCount = 0;
    let groupCount = 0;
    while (takenCount < hand.length) {
        let curSize = 0;
        let prev = -1;
        for (let i=0; i<hand.length; i++) {
            if (!taken[i]) {
                if (curSize !== 0 && prev === hand[i]) continue;
                if (curSize === 0 || hand[i] === prev+1) prev = hand[i];
                else return false;
                taken[i] = true;
                takenCount++;
                curSize++;
                if (curSize === groupSize) {
                    groupCount++;
                    break;
                }
            }
        }
    }
    return groupCount === hand.length/ groupSize;
    }
}
