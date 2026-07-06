class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);
        for (let i=0; i<s1.length; i++) {
            s1Count[s1[i].charCodeAt()-97] += 1;
            s2Count[s2[i].charCodeAt()-97] += 1;
        }
        let matches = 26;
        for (let i=0; i<26; i++) {
            if (s1Count[i] !== s2Count[i]) matches--;
        }
        if (matches === 26) return true;
        for (let i=s1.length; i<s2.length; i++) {
            const insertCh = s2[i];
            const removeCh = s2[i-s1.length];

            s2Count[insertCh.charCodeAt()-97]++;
            if (s2Count[insertCh.charCodeAt()-97] === s1Count[insertCh.charCodeAt()-97]) matches++;
            else if (s2Count[insertCh.charCodeAt()-97]-1 === s1Count[insertCh.charCodeAt()-97]) matches--;
            
            s2Count[removeCh.charCodeAt()-97]--;
            if (s2Count[removeCh.charCodeAt()-97] === s1Count[removeCh.charCodeAt()-97]) matches++;
            else if (s2Count[removeCh.charCodeAt()-97]+1 === s1Count[removeCh.charCodeAt()-97]) matches--;
            
            
            
            if (matches === 26) return true;
        }
        return false;
    }
}
