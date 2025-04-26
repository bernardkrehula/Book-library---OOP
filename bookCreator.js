class NewBook {
    constructor(id, name, author, pages, isRead){
        this.id = id;
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

class BookLibrary {
    constructor(){
        this.booksLibrary = [];
        this.pushBookInLibrary();
    }
    pushBookInLibrary(){
        this.booksLibrary.push(book)
    }
}

const library = new BookLibrary();
console.log(library)