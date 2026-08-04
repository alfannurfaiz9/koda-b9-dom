const celcius = document.querySelector(".celcius").textContent;

const celciusToFahrenheit = celcius * (9 / 5) + 32;
const ceclciusToReamur = (4 / 5) * celcius;
const ceclciusToKelvin = Number(celcius) + 273.15;

const fahrenheitDiv = document.querySelector(".fahrenheit");
const reamurDiv = document.querySelector(".reamur");
const kelvinDiv = document.querySelector(".kelvin");

fahrenheitDiv.textContent = celciusToFahrenheit;
reamurDiv.textContent = ceclciusToReamur;
kelvinDiv.textContent = ceclciusToKelvin;
