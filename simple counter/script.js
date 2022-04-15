let inc = document.querySelector("#inc");
let dec = document.querySelector("#dec");
let res = document.querySelector("#res");
let span = document.querySelector("span");

let counter = 0;


document.addEventListener("DOMContentLoaded", () => {
    span.textContent = counter;
})

inc.addEventListener("click", function() {
    count(++counter)
})

dec.addEventListener("click", function() {
    count(--counter)
})

res.addEventListener("click", function() {
    counter = 0;
    count(counter)
})

function count(test) {
    span.textContent = test;
    if (counter > 0) {
        span.style.color = '#009688'
    } else if (counter < 0) {
        span.style.color = '#e91e63'
    } else {
        span.style.color = '#000'
    }
}

