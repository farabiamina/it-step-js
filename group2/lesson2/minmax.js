function minmaxElem(arr) {
    let maxi = arr[0]; // 
    let mini = arr[0]; // [2, 5, 6, 8]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < mini) {
            mini = arr[i];
        }
        if (arr[i] > maxi) {
            maxi = arr[i];
        }
    }
    // return [mini, maxi];
    return mini;
}

console.log(minmaxElem([2, 5, 6, 8]));