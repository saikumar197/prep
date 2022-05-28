Array.prototype.map = function (callback) {
    var mapArray = [];
    for (var i = 0; i < this.length; i++) {
        mapArray.push(callback(this[i]))
    }
    return mapArray
}
Array.prototype.filter = function (callback) {
    var filterArray = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            filterArray.push(this[i])
        }
    }
    return filterArray
}
Array.prototype.reduce = function (callback,accumulator) {
    for (var i = 0; i < this.length; i++) {
        accumulator = +callback(accumulator,this[i])
    }
    return accumulator
}
arr.map((n, m) => {
    return n + m;
}, 0)
//////////////////
arr.filter((n) => {
    return n == 1;
})
arr.map((n) => {
    return n + 1;
});