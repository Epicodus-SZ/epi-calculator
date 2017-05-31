// Business (or back-end) logic:
var add = function(number1, number2) {
  return number1 + number2;
};

var subtraction = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:
$(document).ready(function() {
  $("#addButton").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    $("div#output").text(add(number1, number2));
  });
  $("#multiplyButton").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    $("div#output").text(multiply(number1, number2));
  });
    $("#divisionButton").click(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#add1").val());
      var number2 = parseInt($("#add2").val());
      $("div#output").text(divide(number1, number2));
  });
  $("#subtractionButton").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    $("div#output").text(subtraction(number1, number2));




  });
});
