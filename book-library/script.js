const myLibrary = [];

// Book Constructor
class Book {
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID(); // Unique ID for each book
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleReadStatus() {
    this.read = !this.read;
  }
}

