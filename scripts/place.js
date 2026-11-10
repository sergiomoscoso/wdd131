document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModifiedDate").textContent = document.lastModified;

const calculateWindChill = (temp, wind) => 
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);

const tempElement = document.getElementById("temp");
const windElement = document.getElementById("wind");
const chillElement = document.getElementById("chill");

const temp = parseFloat(tempElement.textContent);
const wind = parseFloat(windElement.textContent);

if (temp <= 10 && wind > 4.8) {
    chillElement.textContent = calculateWindChill(temp, wind) + " °C";
} else {
    chillElement.textContent = "N/A";
}