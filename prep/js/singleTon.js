//SINGLETON
/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional 
 * references to itself
 */

let obj = (function () {
    let objInstance; //private variable
    function create() { //private function to create methods and properties
        let _isRunning;
        let _start = function () {
            _isRunning = true;
        }
        let _stop = function () {
            _isRunning = false;
        }
        let _currentState = function () {
            return _isRunning;
        }
        return {
            start: _start,
            stop: _stop,
            currentState: _currentState
        }
    }
    return {
        getInstance: function () {
            if (!objInstance) {
                objInstance = create();
            }
            return objInstance;
        }
    };
})();

//let obj1 = obj.getInstance();
//let obj2 = obj.getInstance();