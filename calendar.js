const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const today = new Date();
console.log(today);
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dates = new Date()
date.innerHTML = today.getDate();
day.innerHTML = weekdays[dates.getDay()];
month.innerHTML = allMonth[today.getMonth()];
year.innerHTML = today.getFullYear();

const hour = document.getElementById("clock");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function prinTime() {
    const clock = new Date();
    hour.innerHTML = clock.getHours();
    minute.innerHTML = clock.getMinutes();
    second.innerHTML = clock.getSeconds();
}
setInterval(prinTime, 1)