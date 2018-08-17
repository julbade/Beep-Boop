//business logic

var beepConverter = function(number) {
  var result = [];

  if (number < 0) {
    return "Please enter a higher number"
  } else if (number > 0 && number % 3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that";
  } else if (number.toString().indexOf('1') > -1) {
    return "Boop";
  } else if (number % 10 === 0) {
    return "Beep";
  } else {
    for(var i = 0; i <= number; i += 1) {
      result.push(i);
  };
 }
    return result.toString
}


//user-interface
$(document).ready(function() {
$("form#beep").submit(function(event) {
  event.preventDefault();

  var numberInput = parseInt($("input#enternumber").val());
  var numberResult = beepConverter(numberInput);

  $("#output").text(numberResult);
  $("#result").show();
});
});
