const { printUsersBook, printBooks } = require('./lib/print')
const { userDatabase, bookDatabase } = require('./database')
const Book = require('./models/book');
const User = require('./models/user');


const book1 = Book.create({ title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy" });
const book2 = Book.create({ title: "Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy" });
const book3 = Book.create({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" });
const book4 = Book.create({ title: "Game of Thrones", author: "George R.R. Martin", genre: "Fantasy" });

const user1 = User.create({ username: "john", email: 'john@example.com', password: "john123" });
const user2 = User.create({ username: "cagri", email: 'cagri@example.com', password: "securepassword" });
const user3 = User.create({ username: "zeynep", email: 'zeynep@example.com', password: "zeyno" });


user1.addOwnedBook(book2)
user1.addOwnedBook(book1)
user2.addOwnedBook(book4)
//printUsersBook(user1)
//console.log(user1)
userDatabase.save([user1, user2, user3])
let zeyno = userDatabase.findByName("zeynep")
userDatabase.update(zeyno)
let x  =userDatabase.load()
x.forEach(printUsersBook)

