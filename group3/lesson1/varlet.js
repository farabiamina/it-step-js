function letScoping() {
    let x = 1;

    if (true) {
        let x = 2;
        console.log(x); // 2
    }
    console.log(x); // 1
}
letScoping();

function varScoping() {
    var x = 1;
    
    if (true) {
        var x = 2;
        console.log(x); // 2
    }

    console.log(x); // 2
}

console.log(x);
varScoping();