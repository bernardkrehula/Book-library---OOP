const newBookBtn = document.querySelector('.newBookBtn');
const sendBtn = document.querySelector('sendBtn');
const form = document.querySelector('.bookForm');
const title = document.querySelector('.bookTitle');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const checkBox = document.querySelector('.checkBox');
const books = document.querySelector('.books');

let book;

newBookBtn.addEventListener('click', () => {
    form.style.display = 'block';
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let id = crypto.randomUUID();
    let isEdited;

    book = new NewBook(id, title.value, author.value, pages.value, checkBox.checked, isEdited);
    library.pushBookInLibrary();
    form.style.display = 'none';
    library.cleanFormInputs();
    library.displayCreatedBook(book);
})

books.addEventListener('click', (e) => {
    e.preventDefault();
    let formId = e.target.closest('form').id;
    let btn = e.target.closest('button');
    let foundBook = library.findClickedBook(formId);

    if(btn.className === 'isRead'){
        library.returnIsReadFalse(foundBook);
        library.displayCreatedBook(foundBook); 
        library.iterateThroughArray();
    }
    if(btn.className === 'delete'){
        library.removeBookFromArray(foundBook.id);
        library.iterateThroughArray();
    }
    if(btn.className === 'editBtn'){
        book.setEdited(!foundBook.isEdited);
        library.displayCreatedBook(foundBook);
        library.iterateThroughArray();
    }
});