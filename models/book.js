const uuid = require('uuid')
class Book {
    constructor(title, author, genre, isAvailable=true,reviews=[],image=null,ownerHistory=[]) {
    
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.owner = null;
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
    static create({  title, author, genre,isAvailable,reviews,image,ownerHistory }) {
        return new Book(title, author, genre,isAvailable,reviews,image,ownerHistory)
    }
}
module.exports = Book;