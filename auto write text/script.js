let text = 'you have a dream you have to protecrt it people cant do something to themselves they gonna tell you cant do somthing'

var index = 0;

setInterval(() => {
    index++
    var str = text.slice(0, index);
    document.querySelector(".text").innerHTML = str;

    if (index == text.length) {
        index =0
    }
}, 40);