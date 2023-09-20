const BaseService = require('./base-service')
const Book = require('../models/book')

class BookService extends BaseService {
    async findByTitle(title) {
        return this.findBy("title",title)
    }    
}

module.exports = new BookService(Book)