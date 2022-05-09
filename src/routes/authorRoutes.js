import express from "express"
import authorController from "../controllers/authorsController.js"

const router = express.Router()

router
    .get("/author", authorController.listAuthors)
    .get("/author/:id", authorController.listAuthorsByID)
    .post("/author", authorController.createAuthor)
    .put("/author/:id", authorController.changeAuthor)
    .delete("/author/:id", authorController.deleteAuthor)

export default router