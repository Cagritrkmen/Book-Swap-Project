const BaseDatabase = require('./base-database')
const Book = require('../models/book')

class BookDatabase extends BaseDatabase {
    findByTitle(title) {
        const objects = this.load()

        return objects.find(o => o.title == title)
    }
}

module.exports = new BookDatabase(Book)