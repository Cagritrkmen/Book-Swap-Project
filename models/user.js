// const uuid = require('uuid')
const Book = require("./book")
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username :String,
    email: String,
    password: String,
    image: String,
    ownedBooks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        autopopulate: {maxDepth: 1}
    }]
})

UserSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("User",UserSchema)


    
    

//     removeOwnedBook(book) {
//         if (!(book instanceof Book)) {
//             const newBook = new Book(book.id, book.title, book.author, book.genre, book.isAvailable, book.reviews, book.image, book.ownerHistory);
    
//             book = newBook;
//         }
//         book.updateAvailability(true);
//         book.owner= null
//         const foundBook = this.ownedBooks.find((o)=>o.id ==book.id);
//         const index = this.ownedBooks.indexOf(foundBook)
//         if (index !== -1) {
//             this.ownedBooks.splice(index, 1);
//         }
//     }
    
    
//     addReview(Book, review) {
//         if (Book.ownerHistory.includes(this)) {
//             Book.reviews.push([this.username, review]);
//         }
//         else {
//             console.log("önceden sahiplenilmemiş kitaplara yorum yapılamaz.")
//         }

//     }
//     static create({ id, username, email, password,image, ownedBooks }) {
//         return new User(id, username, email, password,image,ownedBooks)
//     }
// }
// module.exports = User;