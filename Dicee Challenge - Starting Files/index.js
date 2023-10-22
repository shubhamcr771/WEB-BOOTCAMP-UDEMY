function diceroll() {
    var randomNumber1 = Math.floor(Math.random()*6+1);
    document.getElementsByClassName("img1").setAttribute('src', 'dice' + randomNumber1 + '.png');
    document.getElementsByClassName("img2").setAttribute('src', 'dice' + randomNumber1 + '.png');
}