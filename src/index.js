import './style.css';
import 'normalize.css';


document.querySelector('.weather-button').addEventListener('click', () => {
    const inputCity = document.querySelector('.weather-input').value;
    weatherData(inputCity);
});

const weatherData = (city) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
    .then(response => response.json())
    .then(data => {
        outputWeatherData(data);
    })
};

const API_KEY = prompt('Write your WeatherAPI API key');

const outputWeatherData = (data) => {
    // set city to display
    const wrapperCity = document.querySelector('.wrapper--city');
    wrapperCity.textContent = `${data.location.region}, ${data.location.country}`;

    // output degrees;
    const temperature = document.querySelector('.temperature');
    temperature.textContent = `${data.current.temp_c}°`;

    // set desc to display
    const description = document.querySelector('.temperature-info');
    description.textContent = `${data.current.condition.text}`;

    // set icon to display
    const weatherImage = document.querySelector('.wrapper--image');
    while (weatherImage.firstChild) {
        weatherImage.removeChild(weatherImage.firstChild);
    }
    const ImageSrc = document.createElement('img');
    ImageSrc.classList.add('weather--image');
    ImageSrc.src = `${data.current.condition.icon}`;

    weatherImage.appendChild(ImageSrc);
}

const setDate = () => {
    const now = new Date();
    const day = now.getDay();
    const year = now.getFullYear();

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dateDiv = document.querySelector('.today--day');
    dateDiv.textContent = `${weekday[now.getDay()]} ${day} ${month[now.getMonth()]} ${year}`;
};

setDate();