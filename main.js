let mylibrary = [];

function Book(title, author, pages, state) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.state = state;
  this.bookIndex = 0;
}

function addBookToLibrary(book) {
  book.bookIndex = mylibrary.push(book);
  printArray(mylibrary);
}

Book.prototype.printBook = function () {
  return this.title + this.author + this.pages + this.state;
};

function printArray(library) {
  const displayCards = document.getElementById("bookContainer");
  displayCards.replaceChildren();
  library.forEach((element) => {
    displayCards.appendChild(createCard(element));
  });
}

function createCard(book) {
  //Creates the div elemeents for each book
  const card = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const pageDiv = document.createElement("div");
  const removeBtn = document.createElement("button");
  const readBtn = document.createElement("button");

  //Adds Classes to each element for styling
  card.classList.add("bookCard");
  titleDiv.classList.add("bookTitle");
  authorDiv.classList.add("bookAuthor");
  pageDiv.classList.add("bookPages");
  removeBtn.classList.add("bookState");
  readBtn.classList.add("readBtn");

  //Provide data to each of the elements
  titleDiv.textContent = book.title;
  authorDiv.textContent = book.author;
  pageDiv.textContent = book.pages;

  if (book.state) {
    readBtn.textContent = "read";
  } else {
    readBtn.textContent = "still reading";
  }
  removeBtn.textContent = "remove";

  //links the dom object to our array for deletion
  card.setAttribute("bookIndex", book.bookIndex);

  //Add children elements to the card
  card.appendChild(titleDiv);
  card.appendChild(authorDiv);
  card.appendChild(pageDiv);
  card.appendChild(readBtn);
  card.appendChild(removeBtn);

  /*Adding event listeners to the new buttons created*/
  removeBtn.addEventListener("click", () => {
    mylibrary.splice(mylibrary.indexOf(book), 1);
    printArray(mylibrary);
  });

  readBtn.addEventListener("click", () => {
    book.state = !book.state;
    printArray(mylibrary);
  });

  return card;
}

function addBook(event) {
  event.preventDefault();
  modal.style.display = "none";
  const form = document.getElementById("addBookForm");

  title = form.elements["title"].value;
  author = form.elements["author"].value;
  page = form.elements["pages"].value;
  state = form.elements["state"].checked;
  const newBook = new Book(title, author, page, state);
  addBookToLibrary(newBook);
  return true;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//when the user clicks submit, it will add a book to the array
const form = document.getElementById("addBookForm");
form.addEventListener("submit", addBook);

const removeBook = document.getElementById("addBookForm");
form.addEventListener("submit", addBook);

addBookToLibrary(new Book("Harry Potter", "Rowling", 23, true));
addBookToLibrary(new Book("Green Eggs", "Suess", 23, false));
addBookToLibrary(new Book("Hitchhikers", "Adams", 23, true));
addBookToLibrary(new Book("2000 Leagues", "Verne", 23, true));
