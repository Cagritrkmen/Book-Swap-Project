const print = require("../print")
const colors = require("colors")

test("prints user's books",()=>{
    const user = {
        username: "cagri",
        ownedBooks: [{
            title:"GOT",
            author:"murat",
            genre:"ayynen"
        }]
        
    }
    const consoleSpy = jest.spyOn(console,"log")
    //test
    print.printUsersBook(user)
    //assertion
    expect(consoleSpy).toHaveBeenCalledWith("cagri owned GOT")
    //teardown
    consoleSpy.mockRestore()
})