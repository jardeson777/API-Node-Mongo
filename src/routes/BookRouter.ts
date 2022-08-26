import express from "express";
import BookController from "../controllers/BookController";

const BookRouter = express.Router();
const controlBook = new BookController();

BookRouter.get("/livros", controlBook.allBook);

export default BookRouter;
