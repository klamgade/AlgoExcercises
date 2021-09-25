function convertCelsiusToFahrenheit(tempInCelsius) {
    const tempInFahrenheit = (tempInCelsius * 1.8) + 32;
    return tempInFahrenheit;
}

console.log("result : ", convertCelsiusToFahrenheit(100));