
const colors = require('colors')
function printUsersBook(user){
    if(user.ownedBooks.length==0){
        return console.log(colors.red(user.username) + " has not owned any book yet.")
    }
    user.ownedBooks.forEach(element => console.log(colors.red(user.username) + " owned " + colors.green(element.title)))
}
function printBooks(book){
    console.log(colors.red(book.title) + " " + colors.green(book.author) +" "+(book.genre))
}
module.exports = {printUsersBook,printBooks}
