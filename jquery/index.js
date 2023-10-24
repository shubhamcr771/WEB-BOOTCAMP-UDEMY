$(document).keypress(function (event) {
  $("h1").text(event.key);
});
$("h1").before("<button>New Button</button>");