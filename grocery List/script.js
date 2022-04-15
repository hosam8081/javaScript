let userInput = document.querySelector("#user-input");
let textContainer = document.querySelector("ul");
let pen = document.querySelector("#pencil")
var arr = [];
 
function createElement(test) {
    // create element 
    let li = document.createElement('li');
        let text = document.createTextNode("- " + test);
        textContainer.appendChild(li);
        li.appendChild(text);

        li.className = 'list-item';
}

// EVent handle : keydown
document.addEventListener("keydown", (event)=> {
    if (event.which == 13) {
        // create element and add to html
        createElement(userInput.value);
        if (localStorage.getItem('text') == null) {
            arr = [];
        }else{
            arr = JSON.parse(localStorage.getItem("text"))
        }

        // add to local storage
        arr.push(userInput.value);
        localStorage.setItem('text', JSON.stringify(arr))   
    }
})

// EVent handle : click
document.addEventListener("click", function(e) {
    // on click li 
    if (e.target.classList.contains('list-item')){
        // toggle class active
        e.target.classList.toggle('active')
    } 
})

console.log(localStorage.getItem('text'))
console.log(arr);
if (localStorage.getItem('text')) {
    JSON.parse(localStorage.getItem('text')).map(ele => createElement(ele));
}

pen.addEventListener("click", function() {
    textContainer.textContent = '';
    localStorage.clear('text')
});