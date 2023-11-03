import express from "express";
const port = 1313;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello To all who are learning node. nad ");
});

app.get("/about", (req, res) => {
    res.send("<h1>I am Shubham Singh.</h1><br><p> And i am from Bihar, India.</p>");
});

app.get("/contact", (req, res) => {
    res.send("<em>You can call me @8989877877</em>");
});

app.listen(1313, () => {
  console.log(`App is running on ${port}`);
});
