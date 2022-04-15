
let input = document.querySelector('#user_input');




function press(a) {
    input.value += a;
}

function equal() {
    input.value = eval(input.value);
}

function erase() {
    input.value = ''
}
