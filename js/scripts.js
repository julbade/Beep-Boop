//business logic

var beepConverter = function(number) {
  var result = [];


  for(var i = 0; i <=number; i += 1) {

   if (i % 3 === 0 && i !== 0) {
   $("#output").append("I'm sorry, Dave. I'm afraid I can't do that");

 } else if (i.toString().includes('1'))  {
     $("#output").append("Boop!!!" + " ");

  } else if (i.toString().includes("0")) {
     $("#output").append("Beep!!!" + " ");

  } else {
    $("#output").append(i + " ")


}
}
};



//user-interface
$(document).ready(function() {
$("#beep").submit(function(event) {
  event.preventDefault();

  var numberInput = parseInt($("input#enterNumber").val());
  var numberResult = beepConverter(numberInput);

  $("#output").text(numberResult);
  $('#beep').trigger("reset");
});
});
