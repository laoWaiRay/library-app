let myLibrary = [];
const formSubmit = document.querySelector('.form__submit');
const btnNewBook = document.querySelector('.btn-newBook');
const title = document.querySelector('.form__input--title');
const author = document.querySelector('.form__input--author');
const pages = document.querySelector('.form__input--pages');
const checkbox = document.querySelector('.form__input--checkbox');
const image = document.querySelector('.form__input--image');
const popup = document.querySelector('.popup');
const popupBackground = document.querySelector('.popup__background');
const form = document.querySelector('.form');
const popupClose = document.querySelector('.popup__close');
const card = document.querySelector('.card');
const bookDisplay = document.querySelector('.bookDisplay');
const cardClose = document.querySelector('.card__close');

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

const appendBook = (book) => {
    let card_p = card.cloneNode(true);
    bookDisplay.append(card_p);
    card_p.style.display = 'block';
    card_p.querySelector('.card__img').src = `./books/${image.files[0].name}`;
    card_p.querySelector('.card__header').innerText = book.title;
    card_p.querySelector('.card__item--title').innerText = book.title;
    card_p.querySelector('.card__item--author').innerText = book.author;
    card_p.querySelector('.card__item--pages').innerText = book.pages;

    card_p.querySelector('.card__close').addEventListener('click', (e) => {
        const foundBook = myLibrary.find(book => {return book.title === card_p.querySelector('.card__header').innerText});
        myLibrary = myLibrary.filter(book => book.title != foundBook.title);
        e.target.parentElement.parentElement.remove();
    })


    if(book.isRead === true) {
        card_p.querySelector('.card__item--isRead').innerText = 'Read!';
        card_p.querySelector('.card__item--isRead').style.color = 'green';
        card_p.querySelector('.card__item--isRead').style.borderColor = 'green';
    } else {
        card_p.querySelector('.card__item--isRead').innerText = 'Not read yet';
        card_p.querySelector('.card__item--isRead').style.color = 'red';
        card_p.querySelector('.card__item--isRead').style.borderColor = 'red';
    }

    card_p.querySelector('.card__item--isRead').addEventListener('click', () => {
        const foundBook = myLibrary.find(book => {return book.title === card_p.querySelector('.card__header').innerText});
        foundBook.isRead = !foundBook.isRead;
        console.log(foundBook);

        if(book.isRead === true) {
            card_p.querySelector('.card__item--isRead').innerText = 'Read!';
            card_p.querySelector('.card__item--isRead').style.color = 'green';
            card_p.querySelector('.card__item--isRead').style.borderColor = 'green';
        } else {
            card_p.querySelector('.card__item--isRead').innerText = 'Not read yet';
            card_p.querySelector('.card__item--isRead').style.color = 'red';
            card_p.querySelector('.card__item--isRead').style.borderColor = 'red';
        }
    })
}

class Book{
    constructor(title, author, pages, isRead, imgSrc){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.imgSrc = imgSrc;
    }
}

const harryPotter = new Book('Harry Potter', 'J.K. Rowling', 300, true);
const harryPotter2 = new Book('Harry Potter 2', 'J.K. Rowling', 300, true);
const harryPotter3 = new Book('Harry Potter 3', 'J.K. Rowling', 300, true);

const addBooktoLibrary = () =>{
    const newBook = new Book(title.value, author.value, pages.value, isRead.checked, `./books/${image.files[0].name}`)
    myLibrary.push(newBook);
    appendBook(newBook);
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


