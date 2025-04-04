// Set current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + " °C";
    } else {
        return "N/A";
    }
}

// Set wind chill value
const temp = 30; // Static value
const windSpeed = 10; // Static value
document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed);
