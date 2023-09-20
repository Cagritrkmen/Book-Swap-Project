const { userService, bookService } = require('../services')
const User = require("../models/user")


const router = require("express").Router()

router.get("/",async(req,res)=>{
    const users = await userService.load()
    res.render("users",{users})
})
router.post("/",async (req,res)=>{
    const user = await userService.insert(req.body)
    res.send(user)
})
router.delete("/:userId", async(req,res)=>{
    await userService.removeBy("_id",req.params.userId)
    res.send("Ok")
})

router.post("/:userId/ownBookToUser",async(req,res)=>{
    const {userId} = req.params
    const {bookId}= req.body
    const owned= await userService.addOwnedBook(userId, bookId)
    res.send(owned)
})
router.post("/:userId/removeBookFromUser",async(req,res)=>{
    const {userId} = req.params
    const {bookId}= req.body

    const owned= await userService.removeOwnedBook(userId, bookId)
    res.send(owned)
})

router.get("/:userId",async(req,res)=>{
    const user = await userService.find(req.params.userId)
    if(!user) return res.status(404).send("Cannot find user")
    res.render("user",{user})
})

router.patch("/:userId",async(req,res)=>{
    const {username} = req.body
    const {userId} = req.params
    await userService.update(userId,{username})
})

module.exports = router