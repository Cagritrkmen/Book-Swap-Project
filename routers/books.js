const { userService, bookService } = require('../services')
const Book = require("../models/book")


const router = require("express").Router()

router.get("/",async(req,res)=>{
    const books = await bookService.load()
    res.render("books",{books})
})
router.post("/",async (req,res)=>{
    const book = await bookService.insert(req.body)
    res.send(book)
})
router.delete("/:bookId", async(req,res)=>{
    await bookService.removeBy("_id",req.params.bookId)
    res.send("Ok")
})


router.get("/:bookId",async(req,res)=>{
    const book = await bookService.find(req.params.bookId)
    if(!book) return res.status(404).send("Cannot find book")
    res.render("book",{book})
})

router.patch("/:bookId",async(req,res)=>{
    const {title} = req.body
    const {bookId} = req.params
    await bookService.update(bookId,{title})
})

module.exports = router