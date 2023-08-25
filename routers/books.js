const { userDatabase, bookDatabase } = require('../database')
const Book = require("../models/book")


const router = require("express").Router()

router.get("/",async(req,res)=>{
    const books = await bookDatabase.load()
    res.render("books",{books})
})
router.post("/",async (req,res)=>{
    const book = Book.create(req.body)
    await bookDatabase.insert(book)
    res.send(book)
})
router.delete("/:bookId", async(req,res)=>{
    await bookDatabase.removeBy("id",req.params.bookId)
    res.send("Ok")
})


router.get("/:bookId",async(req,res)=>{
    const book = await bookDatabase.find(req.params.bookId)
    if(!book) return res.status(404).send("Cannot find book")
    res.render("book",{book})
})

module.exports = router