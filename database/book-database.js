const BaseDatabase = require('./base-database')
const Book = require('../models/book')

class BookDatabase extends BaseDatabase {
    findByTitle(title) {
        const objects = this.load()

        return objects.find(o => o.title == title)
    }
    removeOwnedBook(book) {
        book.updateAvailability(true);
        const index = this.ownedBooks.indexOf(book);
        if (index !== -1) {
            this.ownedBooks.splice(index, 1);
        }
    }
}

module.exports = new BookDatabase(Book)