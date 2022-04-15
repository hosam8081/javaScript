// declare variable
let container = document.querySelector(".container");
let btn = document.querySelector(".btn");

// add click event
btn.addEventListener("click", function() {
    // create element and text
    let div = document.createElement('div');
    let text = document.createTextNode("this is crazy challenge");
    // add class name
    div.className = "alarm";
    // append child 
    div.appendChild(text);
    container.appendChild(div);

    // set duration to div 
    setTimeout(() => {
        div.remove();
    }, 10000);
})
