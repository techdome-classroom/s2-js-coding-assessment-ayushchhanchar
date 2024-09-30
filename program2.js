/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToIntMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && romanToIntMap[s[i]] < romanToIntMap[s[i + 1]]) {
            total -= romanToIntMap[s[i]];
        } else {
            total += romanToIntMap[s[i]];
        }
    }
    return total;
    
};


module.exports={romanToInt}