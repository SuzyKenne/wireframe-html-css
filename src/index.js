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



function search(event){
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    let cityInput = document.querySelector("#city-input");
    cityElement.innerHTML=cityInput.value;
}
let searchForm= document.querySelector("#search-form");
searchForm.addEventListener("submit", search);



function convertInFahrenheit(event){
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 72;

}


function convertInCelsius(event){
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 22;
}


let fahreinheitLink = document.querySelector("#fahrenheit");
fahreinheitLink.addEventListener("click", convertInFahrenheit);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertInCelsius);