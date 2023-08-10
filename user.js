class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.image = null;
        this.ownedBooks = [];
        
    }


    addOwnedBook(book) {
        if (!book.isAvailable) {
            console.log('Bu kitap maalesef şu anda sahiplenilmiş durumda.');
        } else {
            book.owner = this;
            book.updateAvailability(false);
            book.ownerHistory.push(this);
            this.ownedBooks.push(book); // Kullanıcının ownedBooks dizisine kitabı ekliyoruz.
        }

    }
    removeOwnedBook(book) {
        book.updateAvailability(true);
        const index = this.ownedBooks.indexOf(book);
        if (index !== -1) {
            this.ownedBooks.splice(index, 1);
        }
    }
    addReview(Book, review) {
        if(Book.ownerHistory.includes(this)){
            Book.reviews.push([this.username,review]);
        }
        else{
            console.log("önceden sahiplenilmemiş kitaplara yorum yapılamaz.")
        }
        
    }
}
module.exports = User;