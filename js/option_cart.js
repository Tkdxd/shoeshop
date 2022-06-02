let option_cart_item = document.getElementsByClassName("option-cart-item")[0];
let quantity_span_list = document.getElementsByClassName("quantity-span");
let total_strong = document.getElementsByClassName("total-strong")[0];

function add_cart(e) {
    let product_id = e.target.getAttribute("data-id");
    let p = productDetails.find((p) => p.id == product_id);
    if (p === null) {
        alert("Product not found");
        return;
    }
    let product_item = document.createElement("li");
    product_item.innerHTML = `
                                    <div class="cart-item">
                                        <div class="image">
                                            <img
                                                src="${p.images.thum[0]}"
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            class="item-description"
                                        >
                                            <p class="name">
                                                ${p.title}
                                            </p>
                                            <p>
                                                Size:
                                                <span
                                                    class="light-red"
                                                    >One size</span
                                                ><br />Quantity:
                                                <span
                                                    class="light-red quantity-span" 
                                                    quantity-no="${p.id}"
                                                    >01</span
                                                >
                                            </p>
                                        </div>
                                        <div class="right">
                                            <p class="price">
                                                ${formatPrice(p.price)}₫
                                            </p>
                                            <a
                                                href="#"
                                                class="remove"
                                                onclick="remove_cart(event)"
                                                ><img
                                                    src="images/remove.png"
                                                    alt="remove"
                                                    data-id="${p.id}"
                                            /></a>
                                        </div>
                                    </div>
            `;
    if (cart.find((c) => c.productCode == p.id) == null) {
        option_cart_item.prepend(
            product_item,
            option_cart_item.firstElementChild
        );
        cart.push({ productCode: p.id, quantity: 1 });
    } else {
        cart.find((c) => c.productCode == p.id).quantity++;
        for (let i = 0; i < quantity_span_list.length; i++) {
            if (quantity_span_list[i].getAttribute("quantity-no") == p.id) {
                quantity_span_list[i].innerText = cart.find(
                    (c) => c.productCode == p.id
                ).quantity;
            }
        }
    }
    cart_no.innerHTML = cart.length;
    document.getElementsByClassName("total-strong")[0].innerHTML = total_cart();
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Add product ${p.title} to cart success`);
}

function total_cart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null) {
        cart = [];
    }
    if (cart.length == 0) {
        return 0;
    }
    let total = 0;
    for (let c of cart) {
        total +=
            productDetails.find((p) => p.id == c.productCode).price *
            c.quantity;
    }
    return formatPrice(total);
}

function update_cart() {
    let cart_no = document.getElementsByClassName("cart_no")[0];
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null) {
        cart = [];
    }
    cart_no.innerHTML = cart.length;
    option_cart_item.innerHTML = option_cart_item.lastElementChild.outerHTML;
    if (cart.length > 0) {
        for (let c of cart) {
            let product_item = document.createElement("li");
            let p = productDetails.find((p) => p.id == c.productCode);
            product_item.innerHTML = `
                                            <div class="cart-item">
                                                <div class="image">
                                                    <img
                                                        src="${
                                                            p.images.thum[0]
                                                        }"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    class="item-description"
                                                >
                                                    <p class="name">
                                                        ${p.title}
                                                    </p>
                                                    <p>
                                                        Size:
                                                        <span
                                                            class="light-red"
                                                            >One size</span
                                                        ><br />Quantity:
                                                        <span
                                                            class="light-red quantity-span" 
                                                            quantity-no="${
                                                                p.id
                                                            }"
                                                            >01</span
                                                        >
                                                    </p>
                                                </div>
                                                <div class="right">
                                                    <p class="price">
                                                        ${formatPrice(p.price)}₫
                                                    </p>
                                                    <a
                                                        href="#"
                                                        class="remove"
                                                        onclick="remove_cart(event)"
                                                        ><img
                                                            src="images/remove.png"
                                                            alt="remove"
                                                            data-id="${p.id}"
                                                    /></a>
                                                </div>
                                            </div>
                    `;
            option_cart_item.prepend(
                product_item,
                option_cart_item.firstElementChild
            );
        }
    }
    document.getElementsByClassName("total-strong")[0].innerHTML = total_cart();
}

function remove_cart(e) {
    let product_id = e.target.getAttribute("data-id");
    let p = productDetails.find((p) => p.id == product_id);
    if (p === null) {
        alert("Product not found");
        return;
    }
    let index = cart.findIndex((c) => c.productCode == product_id);
    if (index == -1) {
        alert("Product not found");
        return;
    }
    cart.splice(index, 1);
    update_cart();
    update_cart_total();
    localStorage.setItem("cart", JSON.stringify(cart));
}
