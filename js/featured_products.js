function loadFeaturedProducts() {
    let featured_products_list = document.getElementById("featured");
    for (let i = 0; i < productDetails.length; i += 4) {
        let featured_products_group = document.createElement("li");
        let featured_products_group_row = document.createElement("div");
        featured_products_group_row.className = "row";
        for (let j = i; j < i + 4 && j < productDetails.length; j++) {
            let featured_products_item = document.createElement("div");
            featured_products_item.className = "col-md-3 col-sm-6";
            featured_products_item.innerHTML = `
                                                    <div class="products">
                                                        <div class="thumbnail">
                                                            <a href="details.html"
                                                                ><img
                                                                    src="${
                                                                        productDetails[
                                                                            j
                                                                        ]
                                                                            ?.images
                                                                            ?.small[0]
                                                                    }"
                                                                    alt="Product Name"
                                                            /></a>
                                                        </div>
                                                        <div class="productname">
                                                        ${
                                                            productDetails[j]
                                                                ?.title
                                                        }
                                                        </div>
                                                        <h4 class="price">${formatPrice(
                                                            productDetails[j]
                                                                ?.price
                                                        )}₫</h4>
                                                        <div class="button_group">
                                                            <button
                                                                class="button add-cart"
                                                                type="button"
                                                            >
                                                                Add To Cart</button
                                                            >
                                                        </div>
                                                    </div>
                `;
            featured_products_group_row.appendChild(featured_products_item);
        }
        featured_products_group.appendChild(featured_products_group_row);
        featured_products_list.appendChild(featured_products_group);
    }
}
