// abba abda
// abvba

function palindrom(myStr) {
    let n = myStr.length;
    if (n === 0) {
        return false;
    }
    if (n === 1) {
        return true;
    }

    // let count;
    // if (n%2 == 1) {
    //     count = (n - 1) / 2;
    // }
    // else count = n / 2;
    let count = (n%2) ? n/2 : (n-1) / 2;
    // let count = Math.trunc(n/2);

    for (let i = 0; i < count; i++) {
        if (myStr[i] !== myStr[n - i - 1]) { // abcddcba
            return false;
        }
    }
    return true;
}

console.log(palindrom('absddsba'));
console.log(palindrom('absdvsba'));

function reverse(myStr) {
    // abcd -> dcba
    // [] -> [d,c,b,a] -> dcba
    let result = '';
    let arr = [];
    for (let i = myStr.length - 1; i >= 0; i--) {
        arr.push(myStr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log(reverse('hello'));

// 38462335832

function f1(num) {
    let str = String(num);
    let res = Number(str[0]) + Number(str[str.length - 1]);
    return res;
}

console.log(f1(3435432));

