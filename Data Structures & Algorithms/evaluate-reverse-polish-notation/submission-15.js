class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const ops = new Set(["+", "-", "*", "/"]);
        const calc = (a, b, p) => {
            switch (p) {
                case "+":
                    return a + b;
                case "-":
                    return a - b;
                case "*":
                    return a * b;
                case "/":
                    return Math.trunc(a / b);
            }
        };
        for (let t of tokens) {
            if (ops.has(t)) {
                const num2 = parseInt(stack.pop());
                const num1 = parseInt(stack.pop());
                const temp = calc(num1, num2, t);
                stack.push(temp);
            } else {
                stack.push(parseInt(t));
            }
        }
        return stack[0];
    }
}
