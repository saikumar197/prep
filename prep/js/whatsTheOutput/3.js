//revealing module pattern
//Turn this object literal into a module that only exposes the render method

let myModule = {
    data: [],
    render: () => {

    },
    add: () => {

    },
    remove: () => {

    }
};
//Answer
let Module = (function () {
    let data = [];
    let _render = function () {

    }
    let add = function () {

    };
    let remove = function () {
    }
    return {
        render: _render
    }
})()
