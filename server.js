import express from "express";
import { ScramjetServer } from "@mercuryworkshop/scramjet";

const app = express();

// create scramjet instance
const scramjet = new ScramjetServer({
  prefix: "/service/"
});

// middleware
app.use((req, res, next) => {
  scramjet.handleRequest(req, res, next);
});

// serve your frontend
app.use(express.static("./"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Running on port " + PORT);
});
