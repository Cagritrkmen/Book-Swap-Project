const express = require("express")
const bodyParser = require('body-parser')
const userRouter = require("./routers/users")
const indexRouter =require("./routers/index")



const app = express()
app.use(bodyParser.json())

app.set("view engine", "pug")

app.use("/users", userRouter)

app.use("/",indexRouter)



app.listen(3000, ()=>{
    console.log("started listening on 3000")
})