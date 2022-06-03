function loadDetailProduct() {
    let gallery_01 = document.getElementById("gallery_01");
    let tab_content_item = document.getElementById("Description");
    let products_description = document.getElementsByClassName(
        "products-description"
    )[0];

    // Lấy productCode từ URL
    let product_id = window.location.href.split("=")[1];
    let p = productDetails.find((p) => p.id == product_id);
    let images = p.images;
    let zoom_03 = document.getElementById("zoom_03");

    tab_content_item.innerHTML = `
        <p>${p.description}</p>
    `;

    // Load thông tin chi tiết của sản phẩm
    products_description.innerHTML = `<h5 class="name">${p.title}</h5>
                                    <p>
                                        Tình trạng:
                                        <span class="light-red"> ${
                                            p.availability
                                        } </span>
                                    </p>
                                    <p>
                                        ${p.description}
                                    </p>
                                    <hr class="border" />
                                    <div class="price">
                                        Giá :
                                        <span class="new_price">
                                            ${formatPrice(p.price)}
                                            <sup> ₫ </sup>
                                        </span>
                                    </div>
                                    <hr class="border" />
                                    <div class="wided">
                                        <div class="qty">
                                            Số lượng &nbsp;&nbsp;:
                                            <select class="select-quantity">
                                                <option value="1" selected>1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">8</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>
                                        <div class="button_group">
                                            <button class="button" onclick="add_cart(event)" data-id="${
                                                p.id
                                            }">Thêm vào giỏ hàng</button>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    `;

    // Load ảnh sản phẩm
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
    zoom_03.setAttribute("data-zoom-image", p.images.large[0]);
}

function changeImage(e) {
    // Lấy thẻ img có id zoom_03
    let zoom_03 = document.getElementById("zoom_03");

    // Cập nhật thuộc tính của thẻ img đó
    zoom_03.setAttribute("src", e.target.getAttribute("data-image"));
    zoom_03.setAttribute(
        "data-zoom-image",
        e.target.getAttribute("data-zoom-image")
    );
}

function add_cart(e) {
    // Lấy thông tin giỏ hàng từ local storage
    let cart = JSON.parse(localStorage.getItem("cart"));
    // Kiểm tra xem giỏ hàng có rỗng hay không và tạo mới giỏ hàng nếu rỗng
    if (cart == null) {
        cart = [];
    }

    // Lấy số loại sản phẩm hiện tại trên optional_cart
    let cart_no = document.getElementsByClassName("cart_no")[0];

    // Lấy thẻ chứa thông tin chi tiết các sản phẩm trên giỏ hàng
    let option_cart_item =
        document.getElementsByClassName("option-cart-item")[0];

    // Lấy tổng số lượng sản phẩm trên giỏ hàng
    let quantity = document.getElementsByClassName("select-quantity")[0].value;

    // Lấy id của sản phẩm được chọn
    let product_id = e.target.getAttribute("data-id");

    // Tìm sản phẩm trong csdl bằng id
    let p = productDetails.find((p) => p.id == product_id);

    // Kiểm tra sản phẩm có rỗng không
    if (p === null) {
        alert("Product not found");
        return;
    }

    // Tạo thông tin chi tiết của sản phẩm
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

    // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
    if (cart.find((c) => c.productCode == p.id) == null) {
        // Thêm sản phẩm mới vào trong giỏ hàng
        cart.push({ productCode: p.id, quantity: 1 });

        // Thêm sản phẩm mới vào đầu thẻ option-cart-item
        option_cart_item.prepend(
            product_item,
            option_cart_item.firstElementChild
        );
    } else {
        // Cập nhật số lượng sản phẩm trong giỏ hàng
        cart.find((c) => c.productCode == p.id).quantity +=
            Number.parseInt(quantity);

        // Cập nhật số lượng sản phẩm trên từng phần tử trong giỏ hàng
        for (let i = 0; i < quantity_span_list.length; i++) {
            if (quantity_span_list[i].getAttribute("quantity-no") == p.id) {
                quantity_span_list[i].innerText = cart.find(
                    (c) => c.productCode == p.id
                ).quantity;
            }
        }
    }

    // Cập nhật số loại sản phẩm trong giỏ hàng
    cart_no.innerHTML = cart.length;

    // Lưu giỏ hàng vào local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Tính tổng tiền
    document.getElementsByClassName("total-strong")[0].innerHTML = total_cart();

    // Thông báo thêm sản phẩm thành công
    alert(`Add product ${p.title} to cart success`);
}
