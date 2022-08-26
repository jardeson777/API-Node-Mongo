import book from "../models/BookModel";

type BookProps = {
  _id: String;
  titulo: String;
  autor: String;
  editora: String;
  numeroPagira: Number;
};

class BookController {
  allBook = (req, res) => {
    book.find((err, books: BookProps) => {
      res.status(200).send(books);
    });
  };
}

export default BookController;
