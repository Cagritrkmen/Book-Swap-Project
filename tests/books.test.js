const app = require("../");
const request = require('supertest')(app);

test("creates a new book", async () => {

    const booksToCreate= {
        title: "testBook",
        author: "J.K. Rowling", 
        genre: "Fantasy"
    }
    const response = await request
        .post("/books")
        .send(booksToCreate)
        .expect(200)
    expect(response.body).toMatchObject(booksToCreate)
    
})