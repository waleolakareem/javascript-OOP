
class book {
  constructor(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return this.title + " was written by " + this.author + " in " + this.year;
  };

  getAge() {
    return this.title + " is " + years + " years old"
  };

  //Static method, a method that you do not need to instantiate the class to call it
  static topBookStore() {
    return 'Barnes & Noble'
  }
}
