function loadProductList() {
    let products_listItem =
        document.getElementsByClassName("products-listItem")[0];

    // Lấy thông tin danh mục từ URL
    let category = window.location.href.split("=")[1];
    let product_list = productDetails;

    // Kiểm tra danh mục có undefined hay không
    if (category !== undefined) {
        product_list = product_list.filter((p) => p.category == category);
    }

    // Tạo danh sách thông tin sản phẩm
    for (let p of product_list) {
        let product_item = document.createElement("li");
        product_item.className = "products";
        product_item.innerHTML = `
                                <div class="offer">${p.offer}</div>
                                <div class="thumbnail">
                                    <img
                                        src="${p.images.small[0]}"
                                        alt="Product Name"
                                    />
                                </div>
                                <div class="product-list-description">
                                    <div class="productname">
                                        ${p.title}
                                    </div>
                                    <p>
                                        ${p.description}
                                    </p>
                                    <div class="list_bottom">
                                        <div class="price">
                                            <span class="new_price">
                                                ${formatPrice(p.price)}
                                                <sup> ₫ </sup>
                                            </span>
                                        </div>
                                        <div class="button_group">
                                            <button class="button" data-id="${
                                                p.id
                                            }"
                                            onclick="add_cart(event)">
                                                Thêm vào giỏ hàng
                                            </button>
                                        </div>
                                    </div>
                                </div>
    `;
        products_listItem.appendChild(product_item);
    }
}
