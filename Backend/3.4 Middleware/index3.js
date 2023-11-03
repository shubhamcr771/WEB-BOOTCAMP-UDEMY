import express from "express";

const app = express();
const port = 1313;

function logger(req, res, next) {
  console.log("This request is running on  ", req.url);
  console.log("Request Method:", req.method);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  
});
