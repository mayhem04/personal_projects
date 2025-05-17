const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
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

function toggleRead(id) {
  const book = myLibrary.find(book => book.id === id);
  if (book) {
    book.toggleReadStatus();
    displayBooks();
  }
}

function displayBooks() {
  const libraryContainer = document.getElementById('library');
  libraryContainer.innerHTML = '';

  myLibrary.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Status: ${book.read ? 'Read' : 'Not Read'}</p>
      <button onclick="toggleRead('${book.id}')">Toggle Read</button>
      <button onclick="removeBook('${book.id}')">Remove</button>
    `;
    libraryContainer.appendChild(bookDiv);
  });
}

// Show/hide form when + Add Book is clicked
document.getElementById('showFormBtn').addEventListener('click', () => {
  const form = document.getElementById('book-form');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

// Handle form submission
document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  addBookToLibrary(title, author, pages, read);

  e.target.reset();
  e.target.style.display = 'none'; // hide form again after submit
});
