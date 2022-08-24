import express from "express";
import db from "../config/bdConnect";
import book from "../models/BookModel";

const bookServer = express();

type BookProps = {
  _id: String;
  titulo: String;
  autor: String;
  editora: String;
  numeroPagira: Number;
};

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Banco iniciado com successo"));

bookServer.use(express.json());

bookServer.get("/", (req, res) => {
  res.send("api de livros");
});

bookServer.get("/livros", (req, res) => {
  book.find((err, req: BookProps) => {
    res.status(200).send(req);
  });
});

export { bookServer };
