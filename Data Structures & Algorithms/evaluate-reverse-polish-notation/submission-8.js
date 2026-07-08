class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operation = (v2, v1, sign) => {
            switch(sign){
                case '+':
                    return v2 + v1;
                case '-':
                    return v1 - v2;
                case '*':
                    return v2 * v1;
                case '/':
                    const v = v1 / v2;
                    if (v >= 0) return Math.floor(v);
                    else return Math.ceil(v);
            }
        }
        for (let i=0; i<tokens.length; i++) {
            if(!isNaN(tokens[i])) {
                stack.push(parseInt(tokens[i]));
            } else {
                const temp = operation(stack.pop(), stack.pop(), tokens[i]);
                stack.push(temp);
            }
        }
        return stack.pop()
    }
}
