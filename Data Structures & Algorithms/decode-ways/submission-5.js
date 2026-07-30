class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const decode = (i) => {
            let way = [0, 0];
            if (parseInt(s[i]) > 0) way[0]++;
            if (i>0 && parseInt(s[i-1])>0 && parseInt(s[i-1])*10+parseInt(s[i])<=26) way[1]++;
            return way;
        }
        const memory = [];
        for (let i=0; i<s.length; i++) {
            const [single, double] = decode(i);
            let temp = 0;
            if (single) temp += i===0 ? 1 : memory[i-1];
            if (double) temp += i<2 ? 1 : memory[i-2];
            if (!single && !double) return 0;
            memory.push(temp);
        }
        return memory.pop()
    }
}
