import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("/views/index.ejs");
});

app.post("/submit", (req, res) => {
  res.render('/views/index.ejs');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
