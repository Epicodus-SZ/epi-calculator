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

var BMI = function(weight,height) {
  return weight / height;
}

var healthCheck = function() {
  var weight = parseInt(prompt("Enter your weight (in kilograms):"));
  var height = parseInt(prompt("Enter your height (in meters):"));
  alert("your BMI is " + BMI(weight,height));
}

var celsiusToFahrenheit = function(number) {
  //return number * 1.8 + 32
  alert(number * 1.8 + 32);
}

celsiusToFahrenheit(30);

//var number1 = parseInt(prompt("Enter a number:"));
//var number2 = parseInt(prompt("Enter another number:"));
// var result = add(number1, number2);
// var result = subtraction(number1, number2);
// var result = multiply(number1, number2);
//var result = divide(number1, number2);
//alert(result);
//healthCheck();
