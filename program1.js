/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let stack = [];
    
    const matchingPairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (matchingPairs[char]) {
            stack.push(char);
        } 
        else {
            const lastBracket = stack.pop();
            if (matchingPairs[lastBracket] !== char) {
                return false; 
            }
        }
    }

    return stack.length === 0;

};

module.exports = { isValid };
