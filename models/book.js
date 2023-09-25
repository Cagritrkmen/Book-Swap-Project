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
    reviews: [],
    image: String,
    ownerHistory: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        autopopulate: true}]
});

BookSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("Book",BookSchema)



