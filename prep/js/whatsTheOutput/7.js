function f1(a) {
    let b = 2;
    setTimeout(function () {
        console.log(a, b)
    }, 1000);
}

function f2() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i)
        }, 1000 * i);
    }
}

//var 333
//let 123