// script.js
const apiKey = '49dcfcd5873d5f9512f31597432254c3';

async function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            alert('City not found');
            return;
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert('Error fetching weather data');
    }
}

function displayWeather(data) {
    const cityElement = document.getElementById('city');
    const tempElement = document.getElementById('temp');
    const humidityElement = document.getElementById('humidity');
    const windElement = document.getElementById('wind');

    cityElement.textContent = data.name;
    tempElement.textContent = `${data.main.temp}°C`;
    humidityElement.textContent = `${data.main.humidity}%`;
    windElement.textContent = `${data.wind.speed} km/h`;
}
