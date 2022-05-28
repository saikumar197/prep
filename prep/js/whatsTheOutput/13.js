/**
 * What will the output of the following two loops be?
 */
 const numbers = [1, 2, 3];
 numbers[10] = 11;
 
 for (let i = 0; i < numbers.length; i++) {
   console.log(i, numbers[i]);
 }
 numbers.forEach((num, idx) => {
   console.log(idx, num);
 });
/*____________________________________________________________________*/
var a = [1,2,3,,5,6];
var b = [1,2,3,undefined,5,6];

var fn = function(arr){
    arr.forEach(function(currentValue, index, array){
      console.log(currentValue);
    });
};  

fn(a); //Prints on console (separated by newline): 1 2 3 5 6
fn(b); //Prints on console (separated by newline): 1 2 3 undefined 5 6
