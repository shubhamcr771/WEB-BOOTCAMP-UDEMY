var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
$(".btn").click(function () {
  // This function will be triggered when any of the buttons are clicked
  var userChosenColour = $(this).attr("id");
  alert(userChosenColour);
  userClickedPattern.push(userChosenColour);

});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
  
}

nextSequence();
