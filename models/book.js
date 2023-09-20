const uuid = require('uuid');
const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        autopopulate: true},
    isAvailable: {
        type: Boolean,
        default: true
    },
    reviews: String,
    image: String,
    ownerHistory: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        autopopulate: true}]
});

BookSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("Book",BookSchema)

// class Book {
//     constructor(id= uuid.v4(),title, author, genre, owner=null, isAvailable = true,reviews=[],image=null,ownerHistory=[]) {
//         this.id = id;
//         this.title = title;
//         this.author = author;
//         this.genre = genre;
//         this.owner = owner;
//         this.isAvailable = isAvailable;
//         this.reviews = reviews;
//         this.image = image;
//         this.ownerHistory = ownerHistory;
//     }
//     updateAvailability(status) {
//         this.isAvailable = status;
//     }
//     addDescription(description) {
//         this.description = description;
//     }
//     static create({ id,title, author, genre,owner,isAvailable,reviews,image,ownerHistory }) {
//         return new Book(id,title, author, genre,owner,isAvailable,reviews,image,ownerHistory)
//     }
// }
// module.exports = Book;


