const uuid = require('uuid')
class Book {
    constructor(id= uuid.v4(),title, author, genre, owner=null, isAvailable =true,reviews=[],image=null,ownerHistory=[]) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.owner = owner;
        this.isAvailable = isAvailable;
        this.reviews = reviews;
        this.image = image;
        this.ownerHistory = ownerHistory;
    }
    updateAvailability(status) {
        this.isAvailable = status;
    }
    addDescription(description) {
        this.description = description;
    }
    static create({ id,title, author, genre,owner,isAvailable,reviews,image,ownerHistory }) {
        return new Book(id,title, author, genre,owner,isAvailable,reviews,image,ownerHistory)
    }
}
module.exports = Book;