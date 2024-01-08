import express from "express";

const app = express();
const port = 3000;

function loggers(req, res, next) {
  console.log("Req:", req.method);
  console.log("Res:", req.url);
  next();
  
}
app.use(loggers);
app.get("/", (req, res) => {
  res.send("Hello ji");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
