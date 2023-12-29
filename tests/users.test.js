const app = require("../");
const request = require('supertest')(app);

test("creates a new user", async () => {

    const usersToCreate= {
        username: "cagri",
        email: "cagribaba33@gmail.com",
        password: "12345"
    }
    const response = await request
        .post("/users")
        .send(usersToCreate)
        .expect(200)
    expect(response.body).toMatchObject(usersToCreate)
    expect(response.body.ownedBooks).toEqual([])
    
})