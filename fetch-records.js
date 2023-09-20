const { printUsersBook, printBooks } = require('./lib/print')
const { userService, bookService } = require('./service')




async function main() {
    try {
        let got = await bookService.findByTitle("Game of Thrones")
        console.log(got)
        let john = await userService.findBy("username", "john")
        john.addOwnedBook(got)
        //console.log(john.ownedBooks[1])
        await userService.update(john)
        await bookService.update(got);
        let x = await userService.load()
        x.forEach(printUsersBook)
    } catch (e) {
        return console.log(e)
    }

}

main()

//console.log(book3)