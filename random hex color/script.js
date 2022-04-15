let btn = document.querySelector(".btn");
let hex1 = document.querySelector(".hex1");
let hex2 = document.querySelector(".hex2");

btn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 360);
    let bg1 = `rgb(${randomNumber}, 22, 1)`;
    let bg2 = `hsl(${randomNumber} 60% 60%`;
    document.body.style.backgroundImage =` linear-gradient(to right, ${bg1}, ${bg2})`;
    hex1.textContent = bg1;
    hex2.textContent = bg2;
})