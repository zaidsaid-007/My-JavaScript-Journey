// Variables and Data Types
let book = {
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  year: 1951
};

// Conditional Statement
if (book.year < 2000) {
  console.log(book.title + ' is a classic');
} else {
  console.log(book.title + ' is a modern novel');
}

// Function and Loop
function displayBookInfo(book) {
  for (let key in book) {
    console.log(key + ': ' + book[key]);
  }
}

displayBookInfo(book);

// Inheritance
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

class Novel extends Book {
  constructor(title, author, year, genre) {
    super(title, author, year);
    this.genre = genre;
  }

  getSummary() {
    return `${this.title} is a ${this.genre} novel written by ${this.author} in ${this.year}`;
  }
}

const novel = new Novel('To Kill a Mockingbird', 'Harper Lee', 1960, 'historical fiction');
console.log(novel.getSummary());