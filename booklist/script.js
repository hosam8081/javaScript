// define var
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let isbn = document.querySelector('#isbn');

// define variable btn 
let addBook = document.querySelector(".add-book");

// define text
let text = '';

// define arr
let arr = [];
let curr = 0;


// handle : Event click
addBook.addEventListener("click", function() {
    // if find user values
    if (title.value && author.value && isbn.value) {
        curr++
        // add values to html
        ui(curr, title.value, author.value, isbn.value);
        
        // add values to arr and localStorage        
        addToLocal();

        // empty input values
        title.value = '';
        author.value = '';
        isbn.value = '';
    }
});


// function : add TO html  
function ui(id, titleValue, authorValue, isbnValue ) {
    text =  `
    <tr>
        <td>${titleValue}</td>
        <td>${authorValue}</td>
        <td>${isbnValue}</td>
        <td class="close" data-id="${id}">x</td>
    </tr>
    `  
    document.querySelector("table tbody").innerHTML += text;
}

// function: add to local Storage
function addToLocal() {
    arr.push({id: curr, title: title.value, author: author.value, isbn: parseInt(isbn.value)})
    localStorage.setItem("bookList", JSON.stringify(arr))
}

// check if find bookList and add to ui
if (localStorage.getItem("bookList")) {
    arr = JSON.parse(localStorage.getItem("bookList"));
    curr = arr[arr.length - 1].id;
    // add to ui from localstorage
    arr.map(ele => ui(ele.id, ele.title, ele.author, parseInt(ele.isbn)))
}


// handle: Event Remove 
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("close")) {
        // remove item from arr
        let items = arr.filter(ele => ele.id != e.target.dataset.id);
        
        // update local storage
        arr = items;
        localStorage.setItem('bookList', JSON.stringify(arr))

        // remove from ui
        e.target.parentElement.remove();
    }
})