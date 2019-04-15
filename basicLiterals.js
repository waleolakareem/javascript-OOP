// $(document).ready(function(){
//   console.log("what");
// });


//Object Literal
const book1 = {
  title:'Book One',
  author: 'John Doe',
  year: '2013',
  getSummary: function(){
    return this.title + " was written by " + this.author + " in 2013";
  }
};

console.log(book1.getSummary());

//See all the keys and values
// console.log(Object.values(book1));
// console.log(Object.keys(book1));
