setTimeout(() => {
    let product_grid = document.getElementsByClassName("product-grid")[0];
    let category = window.location.href.split("=")[1];
    let product_list = productDetails;
    if (category !== undefined) {
        product_list = product_list.filter((p) => p.category == category);
    }
    for (let p of product_list) {
        let product_item = document.createElement("div");
        product_item.className = "col-md-4 col-sm-6";
        product_item.innerHTML = `
                                <div class="products">
                                    <div class="thumbnail">
                                        <a href="details.html?id=${p.id}">
                                            <img
                                                src="${p.images.small[0]}"
                                                alt="Product Name"
                                            />
                                        </a>
                                    </div>
                                    <div class="productname">
                                        ${p.title}
                                    </div>
                                    <h4 class="price">${formatPrice(
                                        p.price
                                    )}₫</h4>
                                    <div class="button_group">
                                        <button
                                            class="button add-cart"
                                            type="button"
                                            data-id="${p.id}"
                                            onclick="add_cart(event)"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
    `;
        product_grid.appendChild(product_item);
    }
}, 1000);
