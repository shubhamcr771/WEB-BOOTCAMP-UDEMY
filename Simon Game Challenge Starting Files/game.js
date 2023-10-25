var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
}
$("#blue").fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
$("#red").fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
$("#green").fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
$("#yellow").fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
 
$(document).ready(function() {
    // Get the button by its class
    var $button = $('#red');
    
    // Create an Audio object and load the sound file
    var audio = new Audio('./sounds/red.mp3');

    // Attach a click event handler to the button
    $button.on('click', function() {
        // Play the audio when the button is clicked
        audio.play();
    });
});

$(document).ready(function() {
    // Get the button by its class
    var $button = $('#blue');
    
    // Create an Audio object and load the sound file
    var audio = new Audio('./sounds/blue.mp3');

    // Attach a click event handler to the button
    $button.on('click', function() {
        // Play the audio when the button is clicked
        audio.play();
    });
});

$(document).ready(function() {
    // Get the button by its class
    var $button = $('#green');
    
    // Create an Audio object and load the sound file
    var audio = new Audio('./sounds/green.mp3');

    // Attach a click event handler to the button
    $button.on('click', function() {
        // Play the audio when the button is clicked
        audio.play();
    });
});


$(document).ready(function() {
    // Get the button by its class
    var $button = $('#yellow');
    
    // Create an Audio object and load the sound file
    var audio = new Audio('./sounds/yellow.mp3');

    // Attach a click event handler to the button
    $button.on('click', function() {
        // Play the audio when the button is clicked
        audio.play();
    });
});