setTimeout(() => {
    let username = sessionStorage.getItem("username");
    let usermenu = document.getElementsByClassName("usermenu");

    if (username !== null) {
        usermenu[0].innerHTML = `<li><a>Hello, ${username}</a></li>`;
    } else {
        usermenu[0].innerHTML = `<li>
                            <a
                                href="checkout.html"
                                class="log"
                                >Login</a
                            >
                        </li>
                        <li>
                            <a
                                href="checkout2.html"
                                class="reg"
                                >Register</a
                            >
                        </li>`;
    }
}, 1000);
