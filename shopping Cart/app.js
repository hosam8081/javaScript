// define button
let bagBtn = document.querySelectorAll(".bag-btn");
let arr = [];

let cart = [];

// Function: Fetch data
async function api() {
    // fetch
    let response = await fetch("./products.json");
    let data = await response.json();
    // define variable
    let products = data.items.map((ele) => {
        let { title, price } = ele.fields;
        let image = ele.fields.image.fields.file.url;
        let { id } = ele.sys;
        return { id, title, price, image };
    });
    // return data product
    return products;
}

// Function: ui to show element in html
function ui(products) {
    let product = products.map((product) => {
        return `
        <article class="product">
            <div class="img-container">
            <img
                src="${product.image}"
                alt="product"
                class="product-img"
            />
            <button class="bag-btn" data-id="${product.id}">
                <i class="fas fa-shopping-cart"></i>
                add to bag
            </button>
            </div>
            <h3>${product.title}</h3>
            <h4>${product.price}</h4>
        </article>
        `;
    });
    document.querySelector(".products-center").innerHTML = product.join("");
}

// handle: onLoad
document.addEventListener("DOMContentLoaded", function () {
    // fetch
    api().then((products) => {
        // display elements in html
        ui(products);

        // add to local storage
        addToLocal(products);
    });
});

// Function:  add arr to Local storage
function addToLocal(products) {
    arr.push(...products);
    localStorage.setItem("products", JSON.stringify(arr));
}

// handle: Click
document.addEventListener("click", function (e) {
    // BUTTON : add to cart
    if (e.target.classList.contains("bag-btn")) {
        // if found in cart 
        let items = cart.find((ele) => ele.test.id == e.target.dataset.id);
        console.log(items)
        if (items) {
            // show Cart
            showCart()

            // disable button
            e.target.innerHTML = "in Bag";
            e.target.disabled = true;

        } else {
            // show Cart
            showCart()

            // disable button
            e.target.innerHTML = "in Bag";
            e.target.disabled = true;

            // add To local STorage
            cart.push({test:arr[e.target.dataset.id - 1], amount:1});
            localStorage.setItem("cart", JSON.stringify(cart));

            // add to cart
            addToCart({test:arr[e.target.dataset.id - 1], amount:1});
        } 
    } 
    // Handle: INC amount
    else if (e.target.classList.contains("fa-chevron-up")) 
    {
        // update arr cart
        cart.find(ele =>  (ele.test.id == e.target.dataset.id) ? ele.amount++ : "");
        // update local
        localStorage.setItem("cart", JSON.stringify(cart));
        let contentValue = e.target.parentElement.querySelector(".item-amount");
        // update html
        contentValue.textContent = parseInt(contentValue.textContent) + 1
    }
    // handle: dec amount
    else if (e.target.classList.contains("fa-chevron-down")) {
        let contentValue = e.target.parentElement.querySelector(".item-amount");

        if (parseInt(contentValue.textContent) > 0) {
            cart.find(ele =>  (ele.test.id == e.target.dataset.id) ? ele.amount-- : "");
            localStorage.setItem("cart", JSON.stringify(cart));
            contentValue.textContent = parseInt(contentValue.textContent) - 1
        }
    }
    // handle: remove items
    else if (e.target.classList.contains("remove-item")) {
        let removeItems = cart.filter(ele => ele.test.id != e.target.dataset.id);
        // update local storage
        cart = removeItems;
        localStorage.setItem("cart", JSON.stringify(removeItems));

        // update html
        e.target.parentElement.parentElement.remove()
    }
});

function addToCart(ele) {
    let content = `
    <div class="cart-item">
        <img src="${ele.test.image}" alt="product" />
        <div>
        <h4>${ele.test.title}</h4>
        <h5>${ele.test.price}</h5>
        <span class="remove-item" data-id="${ele.test.id}">remove</span>
        </div>
        <div>
        <i class="fas fa-chevron-up" data-id="${ele.test.id}"></i>
        <p class="item-amount">
            ${ele.amount}
        </p>
        <i class="fas fa-chevron-down" data-id="${ele.test.id}"></i>
        </div>
    </div>
`;

    document.querySelector(".cart-content").innerHTML += content;
}

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    cart.map((ele) => addToCart(ele));
}

// Function: SHowCart()
function showCart() {
    // show Cart
    document.querySelector(".cart-overlay").classList.add("transparentBcg");
    document.querySelector(".cart").classList.add("showCart");
}


//handle Event: add show cart 
let cartBtn = document.querySelector(".cart-btn");
cartBtn.addEventListener("click", function() {
    showCart()
} )

//handle Event: remove show cart 
let closeCart = document.querySelector(".close-cart");
closeCart.addEventListener("click", function() {
    document.querySelector(".cart-overlay").classList.remove("transparentBcg");
    document.querySelector(".cart").classList.remove("showCart");
})


// handle Event: clear Cart
let clearCart = document.querySelector(".clear-cart");
clearCart.addEventListener("click", function() {
    // remove inner html
    document.querySelector(".cart-content").innerHTML = "";
    // clear local storage
    localStorage.removeItem("cart")
})