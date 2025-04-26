const newBookBtn = document.querySelector('.newBookBtn');
const sendBtn = document.querySelector('sendBtn');
const form = document.querySelector('.bookForm');
const title = document.querySelector('.bookTitle');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const checkBox = document.querySelector('.checkBox');

let book;

newBookBtn.addEventListener('click', () => {
    form.style.display = 'block';
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let id = crypto.randomUUID();

    book = new NewBook(id, title.value, author.value, pages.value, checkBox.value);
})