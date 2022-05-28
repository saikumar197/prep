function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=this.year
    this.getSummary=function(){
        return `${this.title} is a ${this.author}`
    }
}
Book.prototype.getNewSummary=function(){
    return `${this.title} was the ${this.author}`
 }
// let book1=new Book('a','b');
// let book2=new Book('c','d');
// console.log(book1.getSummary(),book2.getNewSummary())

function Magzine(title,author,year,month){
    Book.call(title,author,year);
    this.month=month;
}
let mag1= new Magzine('e','f','g','h');
console.log(mag1)
