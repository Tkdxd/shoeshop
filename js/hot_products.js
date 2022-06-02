function loadHotProducts() {
    let hot_products_list =
        document.getElementsByClassName("hot-products-list")[0];
    for (var p of productDetails) {
        let hot_products_item = document.createElement("div");
        hot_products_item.className = "col-md-3 col-sm-3";
        hot_products_item.innerHTML = `<div class="products">
                                            <div class="offer">${p.offer}</div>
                                            <div class="thumbnail">
                                                <a href="details.html"
                                                    ><img
                                                    src="${p.images.small[0]}"
                                                    alt="Product Name"
                                                /></a>
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
                                        </div>`;
        hot_products_list.appendChild(hot_products_item);
    }
}
