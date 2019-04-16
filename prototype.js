//Prototype help eliminate calling of unwanted methods when an instants of an object is called.

function Book(title,author,year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//getSummary
Book.prototype.getSummary = function() {
    return this.title + " was written by " + this.author + " in " + this.year;
};

Book.prototype.getAge = function(){
  const years = new Date().getFullYear() - this.year;
  return this.title + " is " + years + " years old"
};

Book.prototype.revised = function(newYear){
  this.year = newYear;
  this.revised = true;
}

//Instantiate an object
const book1 = new Book('Book One','John Doe','2013');
const book2 = new Book('Book Two','Jane Doe','2013');


book1.revised(2020);
// console.log(book1.getSummary());
