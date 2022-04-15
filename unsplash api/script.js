let input = document.querySelector("#search");

// CLASS GETAPI
class GETAPI {
    async api() {
        let response = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${input.value}&client_id=gTyAjfVXWNk7wfkM6sypjtTclCQ_y1cw-pn20dpIin0`
        );
        let data = await response.json();

        return data.results;
    }
}

// CLASS UI
class UI {
    showHTML(data) {
        let test = data.map((ele) => {
            return ` 
            <div> <img src='${ele.urls.raw}' data-id="${ele.id}" > </div>
            `;
        });
        document.querySelector(".box").innerHTML = test.join("");
    }
}

// handle keyDown
input.addEventListener("keydown", function (e) {
    // if key equal to 13
    if (e.which == 13) {
        let get = new GETAPI();
        let ui = new UI();

        get.api().then((data) => {
            // show images in html
            ui.showHTML(data);
            // loop on images and add click to downlaod this image
            document.querySelectorAll(".box div").forEach((ele) => {
                ele.addEventListener("click", function (e) {
                    let img = data.filter(
                        (ele) => ele.id == e.target.dataset.id
                    );
                    window.open(img[0].links.download, "_blank");
                });
            });
        });
    }
});
