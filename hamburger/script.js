let btn = document.querySelector('button');

btn.addEventListener("click", function() {
    console.log("yes");
    document.querySelector(".navbar").classList.toggle("show");
    document.querySelector("button").classList.toggle("show");
})