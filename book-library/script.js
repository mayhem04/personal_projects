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

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
  }

  function removeBook(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    if (index !== -1) {
      myLibrary.splice(index, 1);
      displayBooks();
    }
  }
  

