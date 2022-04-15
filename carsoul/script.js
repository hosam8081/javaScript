var curr = 0;
setInterval(() => {
    curr++;
    var width = document.querySelector('.img-container img').clientWidth;
    document.querySelectorAll('.img-container img').forEach( ele => {
        ele.style.transform = `translateX(-${width * curr}px)`;
    });
    if (curr >= 2) {
        curr = -1;
    }
}, 2000);