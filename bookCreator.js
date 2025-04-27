class NewBook {
    constructor(id, title, author, pages, isRead, isEdited){
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.isEdited = isEdited;
      
    }
    setEdited(value){ this.isEdited = value };
}

class BookLibrary {
    constructor(){
        this.booksLibrary = [];
    }
    pushBookInLibrary(){
        this.booksLibrary.push(book);
    }
    findClickedBook(bookId){
        return this.booksLibrary.find(book => book.id == bookId);
    }
    returnIsReadFalse(bookId){
        if(bookId.isRead){
            bookId.isRead = false;
        }
        else {
            bookId.isRead = true;
        }
    }
    displayCreatedBook(book){
        console.log(book.isEdited)
        let html = book.isEdited ? `<form class="addedBook" id="${book.id}">
        <input type="text" class="editTitle" value="${book.title}">
                    <input type="text" class="editAuthor" value="${book.author}">
                    <input type="number" class="editPages" value="${book.pages}">
                    <div class="addedBookButtons">
                        <button type="button" class="isRead">${book.isRead ? "Read ✅" : "Unread ❌"}</button>
                        <button type="button" class="delete">Delete Book</button>
                        <button type="submit" class="editBtn">Save</button>
                    </div>
        </form>` 
        : 
        `
        <form class="addedBook" id="${book.id}">
                <h3>${book.title}</h3>
                <h4>${book.author}</h4>
                <p>${book.pages}</p>
                <div class="addedBookButtons">
                    <button class="isRead">${book.isRead ? "Read ✅" : "Unread ❌"}</button>
                    <button class="delete">Delete Book</button>
                    <button class="editBtn">Edit</button>
                </div>
            </form>
        `
        books.insertAdjacentHTML('beforeend', html)
    }
}

const library = new BookLibrary();
