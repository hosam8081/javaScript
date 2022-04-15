let day = document.querySelector('#day');
let hour = document.querySelector('#hours');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
let ampm = document.querySelector('#ampm');



function an() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = date.getDay();
    let dayNames = ["SUN", "MON", "TUE", "WED", "THU","FRI", "SAT"];    

    let ampms = hours > 12 ? "PM" : "AM";

    seconds = seconds <= 9 ? `0${seconds}` : seconds;
    minutes = minutes <= 9 ? `0${minutes}` : minutes;
    
    hours = hours % 12;
    hours = hours <= 9 ? `0${hours}` : hours;

    sec.textContent = seconds;
    min.textContent = minutes;
    hour.textContent = hours;
    day.textContent = dayNames[days];
    hour.textContent = hours;
    ampm.textContent = ampms

    setTimeout(an, 100);
}

window.addEventListener("load", an());


