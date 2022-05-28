// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// //if + it will try for number(truthy 0-false,1-true)
// // '!' has more priority than +
// // 1 [] 'a'                   true
// // 0 ''  NaN undefined null   false
// let log = console.log;
// log()
// log(!0);//true
// log(!'0')//false
// log(+"1"); //1
// log(+true); //1
// log(+false); //0
// log(+""); //0
// log(+"hello"); //NaN
// log(+1);//1
// log(!!true);//true
// log(!!"");//false
// log(!!1);//true
// log(!!-1);//true
// log(!!NaN);//false
// log(!!undefined);//false
// log(!!"false");//true
// log(!!null);//false
// log(![])//false
// log([] + []) // ''
// log(+[]) //0
// log(!+[]) //true
// log(['a','b']===['a','b'])//false
// log(['a','b']==['a','b'])//false
// log(['a','b']==['a','b'] + [])//true
function titleCase(str) {
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  }
console.log(titleCase("ABC ABC"))
