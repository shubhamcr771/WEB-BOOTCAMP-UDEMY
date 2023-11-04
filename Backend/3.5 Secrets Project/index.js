import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var isrealuser = false;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

function passwordcheck(req, res, next) {
    const password = req.body["password"];
    if(password === "ILoveProgramming") {
        isrealuser = true;
    } 
    next();
}
app.use(passwordcheck);

app.post("/check", (req, res) => {
  if(isrealuser) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
