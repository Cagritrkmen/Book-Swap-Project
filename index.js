const { printUsersBook, printBooks } = require('./lib/print')
const { userDatabase, bookDatabase } = require('./database')
const Book = require('./models/book');
const User = require('./models/user');

let cagri = userDatabase.findByName("cagri")
if (cagri.ownedBooks[0] instanceof Book) {
    console.log("Nesne bir Book örneği.");
} else {
    console.log("Nesne bir Book örneği değil.");
}



