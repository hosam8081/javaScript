let btn = document.querySelector("input[type='submit']");
let input = document.querySelector("input[type='text']");
let text = document.querySelector(".text");

function yourText() {
    text.textContent = input.value;
}

btn.addEventListener("click", function() {
    yourText()
})
document.addEventListener("keypress", (e) => {
    if (e.which == 13) {
        yourText()
    }
})