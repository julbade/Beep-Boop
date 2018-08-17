var beepConverter = function(number){
   if (isNaN(number)) {
    return output = 1;
  }
      else if (number % 30 === 0) {
        return output=2;
    }

      else {
      alert("Beep");
    }
  }





$(document).ready(function() {
$("form#beep").submit(function(event) {
  event.preventDefault();

  var number = $("input#enternumber").val();

  var output = beepConverter(number);
  if (output === 1) {
    output = "Please Enter A Number"
  } else if (output === 2){
    output = "I'm sorry, Dave. I'm afraid I can't do that."
  }
  $("#result").text(output);
  $("#result").show();
});
});
