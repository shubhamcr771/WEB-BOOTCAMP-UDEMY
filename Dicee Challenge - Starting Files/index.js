var randomNumber = Math.floor(Math.random*6+1);
document.querySelector(".img1").setAttribute("src", "dice" + randomNumber + ".png");
document.querySelector(".img2").setAttribute("src", "dice" + randomNumber + ".png");

