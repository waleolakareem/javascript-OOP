//Constructors This are just majorly functions

function Book(title,author,year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function() {
    return this.title + " was written by " + this.author + " in " + this.year;
  };
}


//Instantiate an object
const book1 = new Book('Book One','John Doe','2013');
const book2 = new Book('Book Two','Jane Doe','2013');
// console.log(book1.getSummary());


