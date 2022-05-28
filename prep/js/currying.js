function add(a) {
    return function(b){
      if(b){
        return add(a+b)
      }
      return a
    }
  }
  // add(1,2..n)(5,6…n)…(n)()
  function add(...args) {
    let a = args.reduce((a, b) => a + b, 0)
    return function(...args){
      let b = args.reduce((a, b) => a + b, 0)
      if(b){
        return add(a+b)
      }
      return a
    }
  }
    