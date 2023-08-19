const { printUsersBook, printBooks } = require('./lib/print')
const { userDatabase, bookDatabase } = require('./database')
const Book = require('./models/book');
const User = require('./models/user');

const book3 = Book.create({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" });
const user1 = User.create({ username: "john", email: 'john@example.com', password: "john123" });







async function main() {
    try {
        let cagri = await userDatabase.findBy("username", "cagri")
        cagri.addOwnedBook(book3)
        await userDatabase.update(cagri)
        let x = await userDatabase.load()
        x.forEach(printUsersBook)
    } catch (e) {
        return console.log(e)
    }

}

main()