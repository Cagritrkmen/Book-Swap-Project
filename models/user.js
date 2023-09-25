// const uuid = require('uuid')
const Book = require("./book")
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username :String,
    email: String,
    password: String,
    image: String,
    ownedBooks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        autopopulate: {maxDepth: 1}
    }]
})

UserSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("User",UserSchema)


    
