import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { header: "Enter Your Name Here!" });
});
// const { fName, lName } = req.body;
// var fullName = `${fname} ${lName}`;
// var characters = fullName.length;

function check(req, res, next) {
  const { fName, lName } = req.body;
  var fullName = `${fName}${lName}`;
  var characters = fullName.length;
  if (characters >= 1) {
    res.render("index.ejs", {
      header: `You Have ${characters} Characters in Your Name`,
    });
  } else {
    res.render("index.ejs", { header: "Enter Your Name" });
  }
  next();
}
app.use(check);

// app.post("/submit", (req, res) => {
//   const { fName, lName } = req.body;
//   var fullName = `${fName} ${lName}`;
//   var characters = fullName.length;
//   res.render("index.ejs", {header: `You Have ${characters} Characters in Your Name`} );
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
