class CountSquares {
    constructor() {}
    freq = new Map();
    points = [];

    /**
     * @param {number[]} point
     * @return {void}
     */
    add([x, y]) {
        const key = `${x},${y}`;
        this.freq.set(key, (this.freq.get(key) || 0) + 1);
        this.points.push([x, y]);
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count([x, y]) {
        let ans = 0;
        for (let [px, py] of this.points) {
            if (px === x || py === y || Math.abs(px - x) - Math.abs(py - y)) continue;
            ans += (this.freq.get(`${x},${py}`) || 0) * (this.freq.get(`${px},${y}`) || 0);
        }
        return ans;
    }
}
