let mainCard = document.querySelector(".main-card");
let front = document.querySelector(".face");
let back = document.querySelector(".back");
let addCard = document.querySelector("#add-card");
let submit = document.querySelector(".submit");
let cardContainer = document.querySelector(".card-container");
let popup = document.querySelector(".popup");
let que = document.querySelector("#que");
let ans = document.querySelector("#ans");
let next = document.querySelector(".next");
let prev = document.querySelector(".next");

addCard.addEventListener("click", function () {
    popup.style.visibility = "visible";
 
});

submit.addEventListener("click", function () {
    popup.style.visibility = "hidden";
    var text = `
        <div class="main-card">
            <div class="face front">${que.value}</div>
            <div class="face back">${ans.value}</div>
        </div>
        `;
    cardContainer.innerHTML += text;
});

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("front")) {
        e.target.parentElement.classList.add("active");
    }

    if (e.target.classList.contains("back")) {
        e.target.parentElement.classList.remove("active");
    }
});


