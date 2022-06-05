let quantity_span_list = document.getElementsByClassName("quantity-span");
let total_strong = document.getElementsByClassName("total-strong")[0];

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
        // Thêm sản phẩm mới vào đầu thẻ option-cart-item
        option_cart_item.prepend(
            product_item,
            option_cart_item.firstElementChild
        );

        // Thêm sản phẩm mới vào trong giỏ hàng
        cart.push({ productCode: p.id, quantity: 1 });
    } else {
        // Cập nhật số lượng sản phẩm trong giỏ hàng
        cart.find((c) => c.productCode == p.id).quantity++;

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

function total_cart() {
    // Lấy thông tin giỏ hàng từ local storage
    let cart = JSON.parse(localStorage.getItem("cart"));

    // Kiểm tra xem giỏ hàng có rỗng hay không và tạo mới giỏ hàng nếu rỗng
    if (cart == null) {
        cart = [];
    }

    // Giỏ hàng rỗng thì tổng tiền là 0
    if (cart.length == 0) {
        return 0;
    }

    let total = 0;

    // Tính tổng tiền
    for (let c of cart) {
        total +=
            productDetails.find((p) => p.id == c.productCode).price *
            c.quantity;
    }

    // Trả về tổng tiền đã được format
    return formatPrice(total);
}

function update_cart() {
    let option_cart_item =
        document.getElementsByClassName("option-cart-item")[0];
    // Lấy số loại sản phẩm hiện tại trên optional_cart
    let cart_no = document.getElementsByClassName("cart_no")[0];
    // Lấy thông tin giỏ hàng từ local storage
    let cart = JSON.parse(localStorage.getItem("cart"));

    // Kiểm tra xem giỏ hàng có rỗng hay không và tạo mới giỏ hàng nếu rỗng
    if (cart == null) {
        cart = [];
    }

    // Cập nhật số loại sản phẩm trong giỏ hàng
    cart_no.innerHTML = cart.length;
    option_cart_item.innerHTML = option_cart_item.lastElementChild.outerHTML;

    // Kiểm tra giỏ hàng có trống hay không
    if (cart.length > 0) {
        // Thêm sản phẩm vào giỏ hàng
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

    // Cập nhật tổng tiền
    document.getElementsByClassName("total-strong")[0].innerHTML = total_cart();
}

function remove_cart(e) {
    // Lấy thông tin giỏ hàng từ local storage
    let cart = JSON.parse(localStorage.getItem("cart"));

    // Kiểm tra xem giỏ hàng có rỗng hay không và tạo mới giỏ hàng nếu rỗng
    if (cart == null) {
        cart = [];
    }

    // Lấy id của sản phẩm được chọn
    let product_id = e.target.getAttribute("data-id");

    // Tìm sản phẩm trong csdl bằng id
    let p = productDetails.find((p) => p.id == product_id);

    // Kiểm tra sản phẩm có rỗng không
    if (p === null) {
        alert("Product not found");
        return;
    }

    // Tìm sản phẩm trong giỏ hàng bằng id
    let index = cart.findIndex((c) => c.productCode == product_id);

    // Kiểm tra sản phẩm có tồn tại trong giỏ hàng hay không
    if (index == -1) {
        alert("Product not found");
        return;
    }

    // Xóa sản phẩm khỏi giỏ hàng
    cart.splice(index, 1);

    // Lưu giỏ hàng vào local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Cập nhật giỏ hàng
    update_cart();
}
