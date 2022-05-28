/***
 * What will be the output of this code and why?
 */
 let obj = { a: 1 };
 let objb = { a: 1 };
 
 if ({ a: 1 } === { a: 1 }) {
   console.log("Monday");
 } else if ({ a: 1 } == { a: 1 }) {
   console.log("Tuesday");
 } else if (obj == { a: 1 }) {
   console.log("Wednesday");
 } else if (obj == objb) {
   console.log("Thursday");
 } else if (Object.is(obj, objb)) {
   console.log("Friday");
 } else {
   console.log("Saturday");
 }
 ///Saturday

//  In JavaScript, we cannot directly compare two objects by equality operators (double equals == or triple equals ===)
//   to see whether they are equal or not. Comparing two objects like this results in false even if they have the same data.
