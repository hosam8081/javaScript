let productContainer = document.querySelector(".product-center");
let btnCart = document.querySelector(".btn-cart");
let closeBtn = document.querySelector(".close-cart");
let cartContent = document.querySelector(".cart-content");
let cart = [];

/* only Fetch */

// fetch("products.json")
//     .then((response) => response.json())
//     .then((data) => {
//         data.items.forEach((ele) => {
//             var text = `<div class="product">
//            <div class="img-container">
//            <img src="${ele.fields.image.fields.file.url}" alt="${ele.fields.title}">
//            <button class="btn btn-add" data-id="${ele.sys.id}"> <i class="fas fa-shopping-cart"></i> add to cart</button>
//            </div>
//            <h3>${ele.fields.title} </h3>
//            <h4>${ele.fields.price}</h4>
//            </div>`;

//             productContainer.innerHTML += text;
//         });
//     });

/* Using async */

// Fetch data
// async function comfyFetch() {
//     let response = await fetch("products.json");
//     let data = await response.json();
//     return {data}
// }

// // UI
// function ui() {
//     comfyFetch().then(data => {
//         data.data.items.forEach((ele) => {
//             var text = `<div class="product">
//             <div class="img-container">
//             <img src="${ele.fields.image.fields.file.url}" alt="${ele.fields.title}">
//             <button class="btn btn-add" data-id="${ele.sys.id}"> <i class="fas fa-shopping-cart"></i> add to cart</button>
//             </div>
//             <h3>${ele.fields.title} </h3>
//             <h4>${ele.fields.price}</h4>
//             </div>`;

//             productContainer.innerHTML += text;
//         });
//     })
// }
// ui();

/* using classes */

// Fetch data
class COMFY {
    async comfyFetch() {
        let response = await fetch("products.json");
        let data = await response.json();

        return data;
    }
}

// display data
class UI {
    // display product to html
    showHtml(data) {
        data.items.forEach((ele) => {
            let text = `<div class="product">
            <div class="img-container">
            <img src="${ele.fields.image.fields.file.url}" alt="${ele.fields.title}">
            <button class="btn btn-add" data-id="${ele.sys.id}"> <i class="fas fa-shopping-cart"></i> add to cart</button>
            </div>
            <h3>${ele.fields.title} </h3>
            <h4>${ele.fields.price}</h4>
            </div>`;

            productContainer.innerHTML += text;
        });
    }

    // add product to cart
    addToCart(data) {
        let addBtn = [...document.querySelectorAll(".btn-add")];
        addBtn.forEach((ele) => {
            ele.addEventListener("click", (e) => {
                let product = data.items.filter(
                    (ele) => ele.sys.id == e.target.dataset.id
                );
                let cartItem = { product, amount: 1 };
                cart = [...cart, cartItem];

                let inCart = cart.find((ele) => {
                    return ele.product[0].sys.id == e.target.dataset.id;
                });
                console.log(inCart);

                // disapled cart
                e.target.disabled = true;
                e.target.innerHTML = "in bag";
                // showCart
                this.showCart();
                // add cart item
                this.addItem(cartItem);
                
                console.log(cart);
            });
        });
    }

    showCart() {
        document.querySelector(".cart-container").classList.add("show");
        document.querySelector(".cart").classList.add("show");
    }

    addItem(item) {
        let { title, price } = item.product[0].fields;
        let text = `
            <div class="cart-item">
                <div><img src="${item.product[0].fields.image.fields.file.url}" alt=""></div>
                <div>
                    <h4>${title}</h4>
                    <h5>${price}</h5>
                    <span class="remove">remove</span>
                </div>
                <div>
                    <i class="btn fas fa-chevron-up"></i>
                    <p class="item-amount">
                        ${item.amount}
                    </p>
                    <i class="btn fas fa-chevron-down"></i>
                </div>
            </div>`;

        cartContent.innerHTML += text;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let comfy = new COMFY();
    let ui = new UI();
    comfy.comfyFetch().then((data) => {
        ui.showHtml(data);
        ui.addToCart(data);
    });
});

// Click Event: add cart

btnCart.addEventListener("click", function () {
    document.querySelector(".cart-container").classList.add("show");
    document.querySelector(".cart").classList.add("show");
});

// handle Event: remove cart
closeBtn.addEventListener("click", function () {
    document.querySelector(".cart-container").classList.remove("show");
    document.querySelector(".cart").classList.remove("show");
});

// display product to cart
// document.addEventListener('click', function(e) {
//     if (e.target.classList.contains("btn-add")){
//         console.log(e.target)
//     }
// })
