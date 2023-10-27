var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
}
$("#red").fadeOut(50).fadeIn(50);
$("#blue").fadeOut(50).fadeIn(50);
$("#green").fadeOut(50).fadeIn(50);
$("#yellow").fadeOut(50).fadeIn(50);

