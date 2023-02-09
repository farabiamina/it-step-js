let i = 0;
while (false) {
    i++;
}

for (let j = 0; j < 10; j++) {
    console.log(j);
}
// console.log(j);

// Вывести все нечетные числа до 30
for (let i = 1; i < 31; i++) {
    if (i%2 == 0) {
        continue;
    }
    console.log(i);
}

let arr = [1,3,4,5,6,7];
let n = +prompt('Введите число');
let res;
for (let i = 0; i < arr.length; i++) {
    if (n == arr[i]) {
        res = arr[i];
        break;
    }
}

for (let i = 0; i < 11; i++) {
    arr[i] = +prompt("");
}


// [1,3,4,5,6,7]

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // sum = sum + arr[i];
}

for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    sum += arr[i];
}