
const { userService, bookService } = require('./service')
const Book = require('./models/book');
const User = require('./models/user');
const { printUsersBook, printBooks } = require('./lib/print')


const book1 = Book.create({ title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy" });
const book2 = Book.create({ title: "Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy" });
const book3 = Book.create({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" });
const book4 = Book.create({ title: "Game of Thrones", author: "George R.R. Martin", genre: "Fantasy" });

const user1 = User.create({ username: "john", email: 'john@example.com', password: "john123" });
const user2 = User.create({ username: "cagri", email: 'cagri@example.com', password: "securepassword" });
const user3 = User.create({ username: "zeynep", email: 'zeynep@example.com', password: "zeyno" });

user1.addOwnedBook(book1)
user2.addOwnedBook(book2)
user3.addOwnedBook(book3)






async function main() {
    try {
        await bookService.save([book1, book2, book3, book4])
        const books = await bookService.load()
        books.forEach(printBooks)
        await userService.save([user1, user2, user3])
        const users = await userService.load()
        users.forEach(printUsersBook)
    } catch (e) {
        return console.log(e)
    }

}

main()