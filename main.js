class Book {
  constructor(title, author, pages, state) {
    this._title = title;
    this.author = author;
    this.pages = pages;
    this.state = state;
    this.bookIndex = 0;
  }

  printBook() {
    return this.title + this.author + this.pages + this.state;
  }

  get bookIndex() {
    return this._bookIndex;
  }

  set bookIndex(bookIndex) {
    this._state = state;
  }

  get title() {
    return this._title;
  }
  set title(title) {
    this._state = state;
  }
  get author() {
    return this._author;
  }
  set author(author) {
    this._author = author;
  }
  get pages() {
    return this._pages;
  }
  set pages(pages) {
    this._pages = pages;
  }

  get state() {
    return this._state;
  }
  set state(state) {
    this._state = state;
  }
}

class Library {
  constructor() {
    this._myLibrary = new Array();
  }

  addBookToLibrary(book) {
    return this._myLibrary.push(book);
  }

  removeBookFromLibrary(book) {
    this._myLibrary.splice(this._myLibrary.indexOf(book), 1);
  }

  get library() {
    return this._myLibrary;
  }
}

const myLibrary = new Library();

function displayLibrary() {
  const displayCards = document.getElementById("bookContainer");
  displayCards.replaceChildren();
  myLibrary.library.forEach((element) => {
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
    myLibrary.removeBookFromLibrary(book);
    displayLibrary();
  });

  readBtn.addEventListener("click", () => {
    book.state = !book.state;
    displayLibrary();
  });

  return card;
}

function addBook(event) {
  event.preventDefault();
  modal.style.display = "none";
  const form = document.getElementById("addBookForm");

  const title = form.elements.namedItem("title").value;
  const author = form.elements.namedItem("author").value;
  const page = form.elements.namedItem("pages").value;
  const state = form.elements.namedItem("state").checked;
  const newBook = new Book(title, author, page, state);
  myLibrary.addBookToLibrary(newBook);
  displayLibrary();
  return true;
}

function addValidation(){
  const title = document.getElementById('title');
  const author = document.getElementById('author');

title.addEventListener("input",(event)=>{
  console.log ("starting event");
  if (!title.validity){
    console.log ("tooshort");
    title.setCustomValidity("A book needs a title");
  }
  else{
    title.setCustomValidity("");
  }
});
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

myLibrary.addBookToLibrary(new Book("Harry Potter", "Rowling", 23, true));
myLibrary.addBookToLibrary(new Book("Green Eggs", "Suess", 23, false));
myLibrary.addBookToLibrary(new Book("Hitchhikers", "Adams", 23, true));
myLibrary.addBookToLibrary(new Book("2000 Leagues", "Verne", 23, true));

addValidation();
displayLibrary();

