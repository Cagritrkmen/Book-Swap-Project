const { printUsersBook, printBooks } = require('./lib/print')
const { userDatabase, bookDatabase } = require('./database')




async function main() {
    try {
        let got = await bookDatabase.findByTitle("Game of Thrones")
        console.log(got)
        let john = await userDatabase.findBy("username", "john")
        john.addOwnedBook(got)
        //console.log(john.ownedBooks[1])
        await userDatabase.update(john)
        await bookDatabase.update(got);
        let x = await userDatabase.load()
        x.forEach(printUsersBook)
    } catch (e) {
        return console.log(e)
    }

}

main()

//console.log(book3)