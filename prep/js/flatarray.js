var array=[[1],[1,2,3],[[1.2],[1,2,3]]];
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }

  console.log(flatten(array))