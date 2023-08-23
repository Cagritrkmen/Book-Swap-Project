const { printUsersBook, printBooks } = require('./lib/print')
const { userDatabase, bookDatabase } = require('./database')
const Book = require('./models/book');
const User = require('./models/user');

const book3 = Book.create({id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" });
const user1 = User.create({ username: "john", email: 'john@example.com', password: "john123" });



async function main() {
    try {
        let john = await userDatabase.findBy("username", "john")
        john.removeOwnedBook(book3)
        await userDatabase.update(john)
        let x = await userDatabase.load()
        x.forEach(printUsersBook)
    } catch (e) {
        return console.log(e)
    }

}

main()

//console.log(book3)