var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png");

function result() {
    var selected = document.querySelector("h1");
    if (randomNumber1 === randomNumber2) {
        selected.innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        selected.innerHTML = "Player1 Wins!"
    } else if (randomNumber1 < randomNumber2) {
        selected.innerHTML = "Player2 Wins!"
    }
}
result();

