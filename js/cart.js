function update_cart_total() {
    let shopTableBody = document.getElementsByClassName("shop-table-body")[0];
    let grandtotalSpan = document.getElementsByClassName("grandtotal-span")[0];

    // Lấy thông tin giỏ hàng từ local storage
    let cart = JSON.parse(localStorage.getItem("cart"));
    // Kiểm tra xem giỏ hàng có rỗng hay không và tạo mới giỏ hàng nếu rỗng
    if (cart == null) {
        cart = [];
    }

    shopTableBody.innerHTML = "";

    // Tạo thông tin sản phẩm trong giỏ hàng
    for (let c of cart) {
        let pInfo = productDetails.find((p) => p.id == c.productCode);
        let product_item = document.createElement("tr");
        let product_select_quantity = document.createElement("select");
        for (let i = 1; i < 10; i++) {
            let product_select_quantity_option =
                document.createElement("option");
            if (c.quantity == i) {
                product_select_quantity_option.setAttribute("value", i);
                product_select_quantity_option.setAttribute(
                    "selected",
                    "selected"
                );
                product_select_quantity_option.innerHTML = i;
                product_select_quantity.appendChild(
                    product_select_quantity_option
                );
            } else {
                product_select_quantity_option.setAttribute("value", i);
                product_select_quantity_option.innerHTML = i;
                product_select_quantity.appendChild(
                    product_select_quantity_option
                );
            }
        }
        product_item.innerHTML = `
                    <td>
                        <img
                            src="${pInfo.images.small[0]}"
                            alt=""
                        />
                    </td>
                    <td>
                        <div class="shop-details">
                            <div class="productname">
                                ${pInfo.title}
                            </div>
                        </div>
                    </td>
                    <td>
                        <h5>${formatPrice(pInfo.price)}₫</h5>
                    </td>
                    <td>
                        ${product_select_quantity.outerHTML}
                    </td>
                    <td>
                        <h5>
                            <strong class="red">
                                ${formatPrice(pInfo.price * c.quantity)}₫
                            </strong>
                        </h5>
                    </td>
                    <td>
                        <a style="cursor: pointer">
                            <img
                                src="images/remove.png"
                                alt=""
                                data-id="${
                                    pInfo.id
                                }" onclick="remove_cart(event)" 
                            />
                        </a>
                    </td>
        `;
        shopTableBody.appendChild(product_item);
    }
    grandtotalSpan.innerHTML = formatPrice(total_cart()) + "₫";
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
    update_cart_total();
}
