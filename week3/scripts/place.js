// Dynamic footer updates
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(2) + "°C";
    }
    return "N/A";
}

// Static weather data
const temp = 8;
const windSpeed = 6;

// Update weather section
document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);
