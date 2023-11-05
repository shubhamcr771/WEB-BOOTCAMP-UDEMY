import express from "express";
const port = 3000;
let app = express();

app.set('view engine', 'ejs');


const d = new Date();


function checkday(req, res, next) {
    if(d.getDay() <= 4) {
        res.render("index.ejs", {days: "weekday", work: "work hard"});

    } else if(d.getDay() > 4 && d.getDay() <= 6) {
        res.render("index.ejs", {days: "weekend", work: "have fun"});
    }
    next();
}

app.use(checkday);



app.listen(port, () => console.log(`This app listening on port ${port}!`));