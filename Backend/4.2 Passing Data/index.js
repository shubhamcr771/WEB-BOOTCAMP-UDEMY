import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  req.sendFile("Backend\4.2 Passing Data\views\index.ejs");
});

app.post("/submit", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
