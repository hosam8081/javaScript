let btn = document.querySelectorAll('.btn');


btn.forEach(ele => {
    ele.addEventListener("click", function() {

        document.querySelectorAll('audio').forEach(ele => {
            ele.pause()
        })

        document.getElementById(ele.dataset.sound).play();
    })
})



