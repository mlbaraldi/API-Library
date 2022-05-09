import express from "express"
import bookController from "../controllers/booksController.js"

const router = express.Router()

router
    .get("/books", bookController.listBooks)
    .get("/books/find", bookController.listBooksByRate)
    .get("/books/:id", bookController.listBooksByID)
    .post("/books", bookController.createBook)
    .put("/books/:id", bookController.changeBook)
    .delete("/books/:id", bookController.deleteBook)

export default router