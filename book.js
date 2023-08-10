class Book{
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.owner = null;
        this.isAvailable = true;
        this.reviews = [];
        this.image = null;
        this.ownerHistory = [];
    }
    updateAvailability(status) {
        this.isAvailable = status;
    }
    addDescription(description) {
        this.description = description;
    }
    
}
module.exports = Book;