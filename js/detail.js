let gallery_01 = document.getElementById("gallery_01");
let tab_content_item = document.getElementById("Description");
let products_description = document.getElementsByClassName(
    "products-description"
)[0];
let product_id = window.location.href.split("=")[1];
let p = productDetails.find((p) => p.id == product_id);
let images = p.images;
let zoom_03 = document.getElementById("zoom_03");

tab_content_item.innerHTML = `
    <p>${p.description}</p>
`;

products_description.innerHTML = `<h5 class="name">${p.title}</h5>
                                    <p>
                                        Availability:
                                        <span class="light-red"> ${
                                            p.availability
                                        } </span>
                                    </p>
                                    <p>
                                        ${p.description}
                                    </p>
                                    <hr class="border" />
                                    <div class="price">
                                        Price :
                                        <span class="new_price">
                                            ${formatPrice(p.price)}
                                            <sup> ₫ </sup>
                                        </span>
                                    </div>
                                    <hr class="border" />
                                    <div class="wided">
                                        <div class="qty">
                                            Qty &nbsp;&nbsp;:
                                            <select>
                                                <option>1</option>
                                            </select>
                                        </div>
                                        <div class="button_group">
                                            <button class="button">Add To Cart</button>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    `;

for (var i = 0; i < images.large.length; i++) {
    let gallery_01_item = document.createElement("li");
    gallery_01_item.className = "gallery_01_item";
    gallery_01_item.innerHTML = `
        <a>
            <img
                src="${images.thum[i]}"
                data-image="${images.medium[i]}"
                data-zoom-image="${images.large[i]}"
                onclick="changeImage(event)"
                alt=""  
            />
        </a>
    `;
    gallery_01.appendChild(gallery_01_item);
}

zoom_03.setAttribute("src", p.images.medium[0]);
zoom_03.setAttribute(
    "data-zoom-image",
    p.images.large[0]
);

function changeImage(e) {
    zoom_03.setAttribute("src", e.target.getAttribute("data-image"));
    zoom_03.setAttribute(
        "data-zoom-image",
        e.target.getAttribute("data-zoom-image")
    );
}
