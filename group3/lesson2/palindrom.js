// abba abdba dlfnkef
// aa aba 
function palindrom(str) {
    let n = str.length;
    if (n === 0) {
        return true;
    }
    if (n === 1) {
        return true;
    }
    let count = (n % 2) ? (n - 1)/2 : n/2;
    for (let i = 0; i < count; i++) { // abdcecdba       i = 0, i = 1
        // str[0] === str[8]        i = 0
        // str[1] === str[7]        i = 1
        // str[2] === str[6]        i = 2
        // str[3] === str[5]        i = 3
        // n = 9
        if (str[i] !== str[n - i - 1]) {
            return false;
        }
    }
    return true;
} 

console.log(palindrom('abcdedcba'));
console.log(palindrom('abvdedcba'));