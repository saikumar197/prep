function Queue() {
    this.elements = [];
 }
 Queue.prototype.enqueue = function (e) {
    this.elements.push(e);
 };
 Queue.prototype.dequeue = function () {
    return this.elements.shift();
};
