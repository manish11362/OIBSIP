// Temperature Converter Logic
document.getElementById("convert-btn").addEventListener("click", function () {
    const inputTemp = parseFloat(document.getElementById("input-temp").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;

    // Validate input
    if (isNaN(inputTemp)) {
        document.getElementById("result").textContent = "Please enter a valid temperature.";
        return;
    }

    // Conversion logic
    let resultTemp;
    if (fromUnit === toUnit) {
        resultTemp = inputTemp;
    } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        resultTemp = (inputTemp * 9/5) + 32;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        resultTemp = inputTemp + 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        resultTemp = (inputTemp - 32) * 5/9;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        resultTemp = (inputTemp - 32) * 5/9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        resultTemp = inputTemp - 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        resultTemp = (inputTemp - 273.15) * 9/5 + 32;
    }

    // Display result
    document.getElementById("result").textContent = `Result: ${resultTemp.toFixed(2)} ${toUnit}`;
});