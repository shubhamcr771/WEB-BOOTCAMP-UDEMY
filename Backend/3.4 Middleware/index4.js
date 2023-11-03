import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {

  var city = req.body["street"];
  var petName = req.body["pet"];
  var bandName = `${city}${petName}`
  res.send(`<h1>Your band name is:</h1><br><h2>${bandName}✌️</h2>`);
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
