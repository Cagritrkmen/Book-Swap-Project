const colors = require('colors');

const Book = require('./book');
const User = require('./user');


const book1 = new Book('Harry Potter', 'J.K. Rowling', 'Fantasy');
const book2 = new Book('Lord of the Rings', 'J.R.R. Tolkien', 'Fantasy');
const user1 = new User('john', 'john@example.com', 'password123');
const user2 = new User('cagri', 'cagri@example.com', 'securepassword');

user1.addOwnedBook(book1);
user1.addOwnedBook(book2);
user1.addReview(book1,"Çok iyi bir kitap.")
console.log(colors.red(book1.owner.username) + " owned " + colors.green(book1.title))
user1.removeOwnedBook(book1)
user1.ownedBooks.forEach(element => {
    console.log(element.title)
})
