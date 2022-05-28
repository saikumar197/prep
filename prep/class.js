log = console.log;
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year
    }
    getSummary() {
        return `${this.title} was written by ${this.author}`;
    }
    static getTopBookStore() {
        return 'xander';
    }
}
let book1 = new Book('BookName', 'BookAuth', '2011')
log(Book.getTopBookStore())
//log(book1.getTopBookStore())// Error static Methods need to be called on base class

class Magazine extends Book {
    constructor(title, author, year,month) {
        super(title, author, year);
        this.month=month
    }
}
let mag1= new Magazine('a','b','c','d')
console.log(Magazine.getTopBookStore())