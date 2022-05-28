const memoizedFunction = (fn) => {
    let cache = {};
    return (value) => {    
      if (value in cache) {
        console.log('Fetching from cache');
        return cache[value];
      }
      else {
        console.log('executing and fetching results');
        let result = fn(value);
        cache[value] = result;
        return result;
      }
    }
  }
  
  function add(a,b){return a+b};
  memoizedFunction(add(2,3));