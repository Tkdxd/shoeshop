let shopTableBody = document.getElementsByClassName("shop-table-body")[0];
let grandtotalSpan = document.getElementsByClassName("grandtotal-span")[0];

function update_cart_total() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null) {
        cart = [];
    }
    shopTableBody.innerHTML = "";
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
