const { userDatabase, bookDatabase } = require('../database')
const User = require("../models/user")


const router = require("express").Router()

router.get("/",async(req,res)=>{
    const users = await userDatabase.load()
    res.render("users",{users})
})
router.post("/",async (req,res)=>{
    const user = await userDatabase.insert(req.body)
    res.send(user)
})
router.delete("/:userId", async(req,res)=>{
    await userDatabase.removeBy("_id",req.params.userId)
    res.send("Ok")
})

router.post("/:userId/addUserBooks",async(req,res)=>{
    const {userId} = req.params
    const {bookId}= req.body
    const user = await userDatabase.find(userId)
    const book= await bookDatabase.find(bookId)

    user.addOwnedBook(book)
    await userDatabase.update(user)
    await bookDatabase.update(book)
    res.send("Ok")
})
router.post("/:userId/removeUserBooks",async(req,res)=>{
    const {userId} = req.params
    const {bookId}= req.body
    const user = await userDatabase.find(userId)
    const book= await bookDatabase.find(bookId)

    user.removeOwnedBook(book)
    await userDatabase.update(user)
    await bookDatabase.update(book)
    res.send("Ok")
})

router.get("/:userId",async(req,res)=>{
    const user = await userDatabase.find(req.params.userId)
    if(!user) return res.status(404).send("Cannot find user")
    res.render("user",{user})
})

router.patch("/:userId",async(req,res)=>{
    const {username} = req.body
    const {userId} = req.params
    await userDatabase.update(userId,{username})
})

module.exports = router