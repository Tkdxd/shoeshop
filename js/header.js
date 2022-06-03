function loadUsername() {
    let username = sessionStorage.getItem("username");
    let usermenu = document.getElementsByClassName("usermenu");

    if (username !== null) {
        usermenu[0].innerHTML = `<li><a>Xin chào, ${username}</a></li>`;
    } else {
        usermenu[0].innerHTML = `<li>
                            <a
                                href="checkout.html"
                                class="log"
                                >Đăng nhập</a
                            >
                        </li>
                        <li>
                            <a
                                href="checkout2.html"
                                class="reg"
                                >Đăng ký</a
                            >
                        </li>`;
    }
}
