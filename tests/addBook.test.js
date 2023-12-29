const app = require("../");
const request = require('supertest')(app);

test("adds a new book to a user ", async () => {

    const usersToCreate = {
        username: "test cagri",
        email: "cagribaba33@gmail.com",
        password: "12345"
    }
    const booksToCreate = {
        title: "testBook",
        author: "J.K. Rowling", 
        genre: "Fantasy"
    }
    const userResponse = await request
        .post("/users")
        .send(usersToCreate)
        .expect(200)
    const bookResponse = await request
        .post("/books")
        .send(booksToCreate)
        .expect(200)
    const addBookResponse = await request
        .post(`/users/${userResponse.body._id}/ownBookToUser`)
        .send({
            bookId: bookResponse.body._id
        })
        .expect(200)
    const addBookToUser = addBookResponse.body
    expect(addBookToUser).toMatchObject(usersToCreate)

})