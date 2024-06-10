let myLibrary = []
// MODALE 
const modal = document.querySelector('.modal');
const openModal = document.querySelector('#openModal');
    openModal.addEventListener('click', function(){
       modal.classList.add('open'); 
    });

const closeModal = document.querySelector('#closeModal');
closeModal.addEventListener('click', function(){
    modal.classList.remove('open');
    });


const bookSection = document.querySelector('#book-section');

function displayBooks(){
myLibrary.forEach(book => {
    const bookContainer = document.createElement('div');
    bookContainer.className = 'book-container';
    const bookTitle = document.createElement('p');
    bookTitle.textContent = `Tittle: ${book.title}`;
    bookContainer.appendChild(bookTitle);
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${book.author}`
    bookContainer.appendChild(bookAuthor);
    const bookPages = document.createElement('p');
    bookPages.textContent = `Pages: ${book.pages}`;
    bookContainer.appendChild(bookPages);
    const bookRead = document.createElement('p');
    bookRead.textContent = `${book.read}`
    bookContainer.appendChild(bookRead);

    bookSection.appendChild(bookContainer)
});
}



function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        console.log(`The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet`)
    }
}
const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', function(){
    let inputTitle = document.querySelector('#title')
    let inputAuthor = document.querySelector('#author')
    let inputPages = document.querySelector('#pages')
    title = inputTitle.value;
    author = inputAuthor.value;
    pages = inputPages.value;
    let isRead = document.querySelector('#checkbox')
        if(isRead.checked) {
            read = 'read'
         }else{
            read = 'not read'
}
    addBookToLibrary(title, author, pages, read)
    console.log(`working`);
    console.log(myLibrary);
    bookSection.textContent = '';
    displayBooks()
});
function addBookToLibrary(title, author, pages, read){
    
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
}

addBookToLibrary('title', 'author', 'pages', 'read');
addBookToLibrary('title', 'author', 'pages', 'read');
addBookToLibrary('title', 'author', 'pages', 'read');
addBookToLibrary('title', 'author', 'pages', 'read');

displayBooks()
console.log(myLibrary);
