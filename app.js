let myLibrary = [];
const formSubmit = document.querySelector('.form__submit');
const btnNewBook = document.querySelector('.btn-newBook');
const title = document.querySelector('.form__input--title');
const author = document.querySelector('.form__input--author');
const pages = document.querySelector('.form__input--pages');
const checkbox = document.querySelector('.form__input--checkbox');
const popup = document.querySelector('.popup');
const popupBackground = document.querySelector('.popup__background');
const form = document.querySelector('.form');
const popupClose = document.querySelector('.popup__close');

const closePopup = () => {
    popup.style.zIndex = '-1';
    popupBackground.style.opacity = '0';
    form.style.opacity = '0';
}

const openPopup = () => {
    popup.style.zIndex = '1';
    popupBackground.style.opacity = '.9';
    form.style.opacity = '1';
}

const clearForm = () => {
    const inputs = document.querySelectorAll('.form__input');
    inputs.forEach(input => {
        input.value = ""
        input.checked = false;
    })
}

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

const addBooktoLibrary = () =>{
    const newBook = new Book(title.value, author.value, pages.value, isRead.checked)
    myLibrary.push(newBook);
}

const showBooks = () => {
    for (let book of myLibrary){
        console.log(book);
    }
}

formSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    addBooktoLibrary();
    clearForm();
    closePopup();
})

btnNewBook.addEventListener('click', () => {
    openPopup();
})

popupClose.addEventListener('click', () => {
    closePopup();
})

