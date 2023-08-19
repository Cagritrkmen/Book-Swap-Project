const BaseDatabase = require('./base-database')
const Book = require('../models/book')

class BookDatabase extends BaseDatabase {
    async findByTitle(title) {
        const objects = await this.load()

        return objects.find(o => o.title == title)
    }    
}

module.exports = new BookDatabase(Book)