var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function() {
  if (!started) {


    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

});

// CHOOSE THE BUTTONS ACCORDING TO CORRESPONDING ID

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);

  animatePress(userChosenColour);
  
});


// NEXT SEQUENCE FUNCTION 

function nextSequence() {

  level++;

  $("#level-title").text("Level " + level);


  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  
}

// FUNCTION TO PLAY SOUND

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


// FUNCTION TO ANIMATE PRESSED BUTTON 

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}




