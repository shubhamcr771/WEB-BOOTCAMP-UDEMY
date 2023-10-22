function diceroll() {
    var randomNumber1 = Math.floor(Math.random()*6+1);
    document.getElementsByClassName("img1").setAttribute("src", "./dice3.png");
    document.getElementsByClassName("img2").setAttribute("src", "./dice2.png");
}
diceroll();