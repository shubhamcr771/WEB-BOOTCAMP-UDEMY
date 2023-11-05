import express from "express";
const port = 3000;
let app = express();

app.set('view engine', 'ejs');
const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
const weekend = ["Saturday", "Sunday"];
const works = ["have fun", "work hard"];

const d = new Date();
let w_day = weekday[d.getDay()];
let we_day = weekend[d.getDay()];

function checkday(req, res, next) {
    if(d.getDay() <= 4) {
        res.render("index.ejs", {days: "weekday", work: works[1]});

    } else {
        res.render("index.ejs", {days: "weekend", work: works[0]});
    }
}

app.use(checkday);



app.listen(3000, () => console.log(`Example app listening on port ${port}!`));