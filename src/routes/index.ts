import { Express, json } from "express";
import BookRouter from "./BookRouter";

const Routes = (app: Express) => {
  app.route("/").get((req, res) => {
    res.status(200).send("API");
  });

  app.use(json(), BookRouter);
};

export default Routes;
