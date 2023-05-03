let mylibrary = [];

function Book(title, author, pages, state) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.state = state;
}

function addBookToLibrary(book) {
  mylibrary.push(book);
  printArray(mylibrary);
  console.log("hit");
}

Book.prototype.printBook = function () {
  return this.title + this.author + this.pages + this.state;
};

function printArray(library) {
  library.forEach((element) => {
    console.log(element.printBook());
  });
}

function addBook(event) {
  event.preventDefault();
  const form = document.getElementById("addBookForm");

  title = form.elements["title"].value;
  author = form.elements["author"].value;
  page = form.elements["pages"].value;
  state = form.elements["state"].value;
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
