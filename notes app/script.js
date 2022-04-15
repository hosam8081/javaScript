// define variable button
let input = document.querySelector("textarea");
let btn = document.querySelector("button");
let close = document.querySelector(".close");
let clear = document.querySelector(".clear");

// define variable element
let popup = document.querySelector(".popup");
let pop = document.querySelector(".pop");

// arr 
let arr = ["#c2ff3d", "#ff3de8", "#04e022", "#bc83e6", "#ebb328", "#3dc2ff"];
var random_margin = ["-5px", "1px", "5px", "10px", "7px"];
var random_degree = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];

let curr = 0

let notes = [];

// add KeyDown if equal to 13 
input.addEventListener("keydown", function(e) {
    if (e.which == 13) {
        
        // create div and set margin, rotate to div
        div(input.value);

        // add to local storage
        notes.push(input.value)
        localStorage.setItem("notes", JSON.stringify(notes));

        // close pop up 
        closePop()
    }
})

// local Storage
if (localStorage.getItem('notes')) {
    notes = JSON.parse(localStorage.getItem("notes"));

    JSON.parse(localStorage.getItem("notes")).forEach(ele => {
        div(ele)
    })

} else {
    notes = []
}

// Create div
function div(content) {
    // create element
    let div = document.createElement("div");
    // add className to element
    div.className = "notes";
    // create textNide
    let text = document.createTextNode(content);
    // append child 
    div.appendChild(text);
    document.querySelector(".grid").appendChild(div);


    let randomNumber = Math.floor(Math.random() * arr.length);
    div.style.margin = `${Math.floor(Math.random() * random_margin.length)}`
    div.style.transform = `${random_degree[Math.floor(Math.random() * random_degree.length)]}`

    div.style.background =  arr[curr];
    curr++ 
    if (curr > arr.length) {
        curr = 0
    }
}

console.log(notes)

// handle CLick: show pop up
btn.addEventListener("click", function() {
    popup.classList.add("show");
    pop.classList.add("show");
})

// handle Click: close pop up 
close.addEventListener("click", function() {
    closePop();
})

clear.addEventListener("click", function () {
    // from html
    document.querySelector(".grid").innerHTML = '';
    // from local storage
    localStorage.removeItem("notes")
})

function closePop() {
    popup.classList.remove("show");
    pop.classList.remove("show");
}

