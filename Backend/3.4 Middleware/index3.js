import express from "express";

const app = express();
const port = 3000;
function logger(req, res, next) {
  console.log("Request method: ", req.method);
  console.log("Rwquest URL: ", req.url);
  next();
  
}
app.use(logger);


app.get("/submit", (req, res) => {
  res.send("Hello ji");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  
});
