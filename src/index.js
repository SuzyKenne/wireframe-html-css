let dateTime = new Date();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satursday"
] ;
let day = days[dateTime.getDay()];
let hour = addZero(dateTime.getHours());
let minute = addZero(dateTime.getMinutes());

function addZero(num){
    return num < 10 ? `0${num}`:num;
}
let li = document.querySelector("#date");
li.innerHTML = `${day}  ${hour}:${minute}`;



function displayWeather(response){
    document.querySelector("#city").innerHTML= response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML= Math.round(response.data.wind.speed);
    document.querySelector("#description").innerHTML= response.data.weather[0].main; 
}

function searchCity(city){
    let apiKey = "88fefabbcf58bb484c698e3e9704070f"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(displayWeather);
}

function search(event){
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    search(city)
}

function searchLocation(event){
    event.preventDefault();
    let apiKey="88fefabbcf58bb484c698e3e9704070f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords,longitude}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(displayWeather);
}    

function displayLocation(event){
    event.preventDefault();
    navigator.geolocation.displayLocation(searchLocation);
}
