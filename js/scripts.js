//business logic

var beepConverter = function(number) {
  var result = [];


  for(var i = 0; i <= number; i += 1) {
    result.push(i);
  };

   if (number > 0 && number % 3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that";

  } else if (number.toString().indexOf('1') > -1) {
    return "Boop!!!";

  } else if (number % 10 === 0) {
    return "Beep!!!";

  } else {
    return result.toString();

}

};



//user-interface
$(document).ready(function() {
$("#beep").submit(function(event) {
  event.preventDefault();

  var numberInput = parseInt($("input#enterNumber").val());
  var numberResult = beepConverter(numberInput);

  $("#output").text(numberResult);
});
});
