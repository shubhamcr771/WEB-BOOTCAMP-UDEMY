var noOfDrumButtons = document.querySelectorAll(".drum").length;
var audio = new Audio('./sounds/tom-1.mp3');

for (var i=0; i<noOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        audio.play();
    })
}

