let input = document.querySelector("input");
let btn = document.querySelector(".get-button");

let text;

let test = [{hosam: "salah"}, { id: 2}];
console.log(test[test.length -1] )
let arr = [];
let curr = 0

btn.addEventListener("click", function() {
    curr++
    // add user input to html 
    ui(input.value, curr);

    // add to local storage
    arr.push({id:curr, user:input.value})
    localStorage.setItem("todo", JSON.stringify(arr));
    // remove user input value 
    input.value = '';
})

function ui (userInput, id) {
    text = `
    <div class="todo-box">
        ${userInput}
        <span class="del" id="${id}">delete</span>
    </div>
    `    
    document.querySelector(".show-data").innerHTML += text
}

function storage() {
    if (localStorage.getItem("todo")) {
        arr = JSON.parse(localStorage.getItem("todo"));
        curr = arr[arr.length - 1].id;
        JSON.parse(localStorage.getItem("todo")).map((ele) => ui(ele.user, ele.id));
    }else{
        arr = [];
        curr= 0;
    }
}

storage();


document.addEventListener('click', function(e) {
    if (e.target.classList.contains("del")) {

        let items  = JSON.parse(localStorage.getItem("todo")).filter(element => !(element.id == e.target.id) );
        // arr = items
        arr = items;

        curr = arr.length + 1
        // json.parser = items or arr
        localStorage.setItem("todo", JSON.stringify(arr))
        // REMOVE div from html
        e.target.parentElement.remove();

    }
})