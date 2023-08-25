const uuid = require('uuid')
const Book = require("./book")
class User {
    constructor(id = uuid.v4(), username, email, password,image,ownedBooks= []) {
        this.id = id
        this.username = username;
        this.email = email;
        this.password = password;
        this.image = image;
        this.ownedBooks = ownedBooks;

    }


    async addOwnedBook(book) {
        if (!(book instanceof Book)) {
            // Parametre olarak gelen kitabı kullanarak yeni bir Book nesnesi oluşturuyoruz.
            const newBook = new Book(book.id, book.title, book.author, book.genre, book.isAvailable, book.reviews, book.image, book.ownerHistory);
    
            book = newBook;
        }
        
        if (!book.isAvailable) {
            console.log('Bu kitap maalesef şu anda sahiplenilmiş durumda.');
        } else {
            book.owner = this;
            book.isAvailable = false;
            book.ownerHistory.push(this);
            this.ownedBooks.push(book);
        }
    }
    
    

    removeOwnedBook(book) {
        if (!(book instanceof Book)) {
            // Gelen parametre Book sınıfına ait değilse, onu Book nesnesine dönüştürüyoruz.
            book = Book.create(book);
        }
        book.updateAvailability(true);
        const foundBook = this.ownedBooks.find((o)=>o.id ==book.id);
        const index = this.ownedBooks.indexOf(foundBook)
        if (index !== -1) {
            this.ownedBooks.splice(index, 1);
        }
    }
    
    
    addReview(Book, review) {
        if (Book.ownerHistory.includes(this)) {
            Book.reviews.push([this.username, review]);
        }
        else {
            console.log("önceden sahiplenilmemiş kitaplara yorum yapılamaz.")
        }

    }
    static create({ id, username, email, password,image, ownedBooks }) {
        return new User(id, username, email, password,image,ownedBooks)
    }
}
module.exports = User;