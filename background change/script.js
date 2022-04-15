let btn = document.querySelector(".change-color");
let curr = 0;
let bgColor = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#95a5a6",
    "#e74c3c",
    "#f39c12",
];

btn.addEventListener("click", function () {
    document.body.style.backgroundColor = bgColor[curr];
    curr++;
    if (curr == bgColor.length) {
        curr = 0;
    }
});
