let btn = document.querySelector('.btn');
let close = document.querySelector(".close");

// click pop
btn.addEventListener("click", function() {
    document.querySelector('.popup-container').classList.add('show');
})

// close popup
close.addEventListener("click", function() {
    document.querySelector('.popup-container').classList.remove('show')
})