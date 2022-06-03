function loadUsername() {
    // Kiểm tra thông tin user trong session storage
    let username = sessionStorage.getItem("username");
    let usermenu = document.getElementsByClassName("usermenu");

    // Kiểm tra username có rỗng hay không
    if (username !== null) {
        usermenu[0].innerHTML = `<li><a>Xin chào, ${username}</a></li>`;
    } else {
        usermenu[0].innerHTML = `<li>
                            <a
                                href="checkout.html"
                                class="log"
                                >Đăng nhập</a
                            >
                        </li>`;
    }
}
