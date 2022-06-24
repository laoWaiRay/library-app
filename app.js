let myLibrary = [];
const newBookBtn = document.querySelector('.btn-newBook');

class Book{
    constructor(title, author, pages, isRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

const harryPotter = new Book('Harry Potter', 'J.K. Rowling', 300, true);
const harryPotter2 = new Book('Harry Potter 2', 'J.K. Rowling', 300, true);
const harryPotter3 = new Book('Harry Potter 3', 'J.K. Rowling', 300, true);

const addBooktoLibrary = (newBook) =>{
    myLibrary.push(newBook);
}

const showBooks = () => {
    for (let book of myLibrary){
        console.log(book);
    }
}

newBookBtn,addEventListener('click', ()=>{
    
})

