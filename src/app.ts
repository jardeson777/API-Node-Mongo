import express from "express";
import db from "./config/bdConnect";
import Routes from "./routes";

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Banco iniciado com successo"));

const App = express();

Routes(App);

export default App;
