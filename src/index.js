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
let hour = dateTime.getHours();
let minute = dateTime.getMinutes();

let li = document.querySelector("#date");
li.innerHTML = `${day}  ${hour}:${minute}`;
