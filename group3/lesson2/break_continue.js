// вывести все четные числа в массиве
// 2 ... 50
for (let i = 2; i < 50; i += 2) {
    console.log(i);
}


function even(arr) {
    for (let i = 0; i < arr.length; i++) {
        // let res = (arr[i]%2) ? false : true; 
        if (!arr[i]%2) {
            console.log(arr[i]);
        }
    }
}

// [3,5,6,4,2,5,7]
function evenContinue(arr) {
    for (let i = 0; i < arr.length; i++) {
        // let res = (arr[i]%2) ? false : true; 
        if (!arr[i]%2) {
            continue;
        }
        console.log(arr[i]); // 3 5 
    }
}

function findElement(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            console.log("Число найдено");
            break;
        }
    }
}


