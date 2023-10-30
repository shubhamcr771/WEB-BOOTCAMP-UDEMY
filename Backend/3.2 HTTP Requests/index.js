import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1> Hello World I am Learning Node </h1>");
});

app.get("/about", (req, res) => {
    res.send("<p>I am a developer.<br> I like football.<br> I am from Bihar, India.</p>");
});

app.get("/contact", (req, res) => {
    res.send("<em> You can send me at shubhamsingh7050@gmail.com  </em>");
});

app.listen(port, () => {
    console.log(`Server Running on port ${port}.`);
});