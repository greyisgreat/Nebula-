import express from "express";
import { createServer } from "@mercuryworkshop/scramjet";

const app = express();

// Scramjet proxy
app.use(createServer({
  prefix: "/service/"
}));

// serve your OS
app.use(express.static("./"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("NebulOS running on port " + PORT);
});
