const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertButton = document.getElementById('convertButton');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', function () {
  const celsiusValue = parseFloat(celsiusInput.value);
  const fahrenheitValue = parseFloat(fahrenheitInput.value);

  if (!isNaN(celsiusValue)) {
    const fahrenheitCalculated = (celsiusValue * 9/5) + 32;
    fahrenheitInput.value = fahrenheitCalculated.toFixed(2);
    resultDiv.textContent = `${celsiusValue}°C is equal to ${fahrenheitCalculated.toFixed(2)}°F`;
  } else if (!isNaN(fahrenheitValue)) {
    const celsiusCalculated = (fahrenheitValue - 32) * 5/9;
    celsiusInput.value = celsiusCalculated.toFixed(2);
    resultDiv.textContent = `${fahrenheitValue}°F is equal to ${celsiusCalculated.toFixed(2)}°C`;
  } else {
    resultDiv.textContent = 'Please enter a valid temperature.';
  }
});

