'use strict'

import { api_key } from "./api_key.js";
const apiKey = api_key;

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city, triggeredByEnter = false) {
    try {
        const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!res.ok) throw new Error("City not found");

        const data = await res.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/hr`;

        const condition = data.weather[0].main;
        const iconMap = {
            "Clouds": "clouds.png",
            "Clear": "clear.png",
            "Rain": "rain.png",
            "Drizzle": "drizzle.png",
            "Mist": "mist.png"
        };
        weatherIcon.src = "/assests/images/" + (iconMap[condition] || "clear.png");

        document.querySelector(".weather").style.display = "block";
        const errorElement = document.querySelector(".error");
        if (errorElement) errorElement.style.display = "none";
    } catch (err) {
        const errorElement = document.querySelector(".error");
        if (triggeredByEnter && errorElement) {
            errorElement.textContent = "Invalid city name!";
            errorElement.style.display = "block";
        }
        document.querySelector(".weather").style.display = "none";
        console.error("Weather fetch failed:", err.message);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim(), false);
});

searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value.trim(), true);
    }
});