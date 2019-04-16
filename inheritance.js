function Book(title,author,year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//getSummary
Book.prototype.getSummary = function() {
    return this.title + " was written by " + this.author + " in " + this.year;
};


function Magazine(title,author,year,month) {
  Book.call(this,title,author,year,month);
  this.month = month;
};

//Creating a protoype for inheritance
Magazine.prototype = Object.create(Book.prototype);

//To use Magazine constructor instead of book
Magazine.prototype.constructor = Magazine
const mag1 = new Magazine('Mag One','John Doe','2018', 'Jan');

console.log(mag1.getSummary());
