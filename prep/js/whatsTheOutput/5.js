// ASI, object literals, square bracket syntax, hoisting
// what happens when you run this code? why?
// how would you fix it?

let a = {
    a: 123
}
[a].forEach(function (x) {
    console.log(x)
})

//ans: Error a
//If semecolon missed at line 7 it considers as and single of exceution as {a:'123'}[a]
