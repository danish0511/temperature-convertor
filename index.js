let celcius = document.getElementById("Celcius");
let fahrenheit = document.getElementById("Fahrenheit");


celcius.oninput = function () {
  let f = celcius.value * 1.8 + 32;
  fahrenheit.value = parseFloat(f.toFixed(2));
};

fahrenheit.oninput = function () {
  let c = (fahrenheit.value - 32) / 1.8;
  celcius.value = parseFloat(c.toFixed(2));
};
