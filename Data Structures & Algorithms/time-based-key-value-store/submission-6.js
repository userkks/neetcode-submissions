class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            this.keyStore.get(key).push({t: timestamp, v: value});
        } else {
            this.keyStore.set(key, [{t: timestamp, v: value}]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";
        const arr = this.keyStore.get(key);
        let i = 0;
        let j = arr.length-1;
        let res = '';
        while (i <= j) {
            const mid = Math.floor((i+j)/2);
            if (arr[mid].t === timestamp) return arr[mid].v;
            if (timestamp >= arr[mid].t) {
                i = mid + 1;
                res = arr[mid].v;
            } else {
                j = mid - 1;
                
            }
        }
        return res;
    }
}
