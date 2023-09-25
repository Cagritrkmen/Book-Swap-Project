const BaseService = require('./base-service')
const User = require('../models/user')
const bookService = require("./book-service")


class UserService extends BaseService {

    async findByName(name) {
        return this.findBy("username", name)
    }
    async addOwnedBook(userId, bookId) {
        const user = await this.find(userId)
        const book = await bookService.find(bookId)

        if (!book.isAvailable) {
            console.log('Bu kitap maalesef şu anda sahiplenilmiş durumda.');
        } else {
            book.owner = user;
            book.isAvailable = false;
            book.ownerHistory.push(user);
            user.ownedBooks.push(book);
        }
        
        await user.save()
        await book.save()
        return user
    }
    async removeOwnedBook(userId,bookId) {
        const user = await this.find(userId)
        const book= await bookService.find(bookId)

        book.isAvailable = true;
        book.owner= null
        const foundBook = user.ownedBooks.find((o)=>o.id ==book.id);
        const index = user.ownedBooks.indexOf(foundBook)
        if (index !== -1) {
            user.ownedBooks.splice(index, 1);
        }
        await user.save()
        await book.save()
        return user
    }
    async addReview(userId,bookId,review){
        const user = await this.find(userId)
        const book= await bookService.find(bookId)
        const ids = []
        book.ownerHistory.forEach(user=> ids.push(user.id))
        console.log(ids)
        if (ids.includes(userId)) {
            book.reviews.push([user.username, review]);
        }
        else {
            console.log("önceden sahiplenilmemiş kitaplara yorum yapılamaz.")
        }
        await user.save()
        await book.save()
    }
}

module.exports = new UserService(User)