function letScope() {
    let x = 1;

    if(true) {
        let x = 2;
        console.log(x); // 2
    }

    console.log(x); // 1
}

function varScope() {
    var x = 1;

    if(true) {
        var x = 2;
        console.log(x); // 2
    }

    console.log(x); // 2
}