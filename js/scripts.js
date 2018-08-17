//business logic

var beepConverter = function(number) {
  var result = [];

  if (number < 0) {
    return "Please enter a higher number"
  } else if (number % 10 === 0) {
    return "Beep";
  } else if (number > 0 &&)

}


//user-interface
$(document).ready(function() {
$("form#beep").submit(function(event) {
  event.preventDefault();

  var numberInput = parseInt($("input#enternumber").val());
  var numverResult = beepConverter(numberInput)


  $("#result").show();
});
});
