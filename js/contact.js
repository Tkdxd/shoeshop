function loadContactInfo() {
    let contact_infoormation = document.getElementsByClassName(
        "contact-infoormation"
    )[0];

    // Lấy thông tin liên hệ từ local storage
    let contactInfo =
        localStorage.getItem("contactInfo") == "[]"
            ? []
            : JSON.parse(localStorage.getItem("contactInfo"));

    // Kiểm tra thông tin liên hệ có rỗng hay không
    if (contactInfo == null) {
        localStorage.setItem("contactInfo", JSON.stringify([]));
    }

    // Tạo thông tin liên hệ
    contact_infoormation.innerHTML = `
                                        <h5>Thông tin liên hệ</h5>
                                        <p>
                                            ${contact_info.description}
                                        </p>
                                        <ul>
                                            <li>
                                                <span class="icon">
                                                    <img
                                                        src="images/message.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <p>
                                                ${contact_info.email
                                                    .join("<br />")
                                                    .toString()}
                                                  
                                                </p>
                                            </li>
                                            <li>
                                                <span class="icon">
                                                    <img
                                                        src="images/phone.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <p>
                                                ${contact_info.phone
                                                    .join("<br />")
                                                    .toString()}
                                                </p>
                                            </li>
                                            <li>
                                                <span class="icon">
                                                    <img
                                                        src="images/address.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <p>
                                                    ${contact_info.address}
                                                </p>
                                            </li>
                                        </ul>
    `;
}

function sendMessage() {
    // Lấy thông tin liên hệ từ local storage
    let contactInfo =
        localStorage.getItem("contactInfo") == "[]"
            ? []
            : JSON.parse(localStorage.getItem("contactInfo"));

    // Kiểm tra thông tin liên hệ có rỗng hay không
    if (contactInfo == null) {
        localStorage.setItem("contactInfo", JSON.stringify([]));
    }

    // Lấy thông tin từ form liên hệ
    let name = document.forms["contact-form"]["name"].value;
    let email = document.forms["contact-form"]["email"].value;
    let message = document.forms["contact-form"]["message"].value;

    // Kiểm tra thông tin liên hệ
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (!email.match(mailformat)) {
        alert("Email is not valid");
        return false;
    }
    if (message == "") {
        alert("Message must be filled out");
        return false;
    }

    // Thêm thông tin liên hệ vào mảng
    contactInfo.push({
        id: contactInfo.length + 1,
        name: name,
        email: email,
        message: message,
    });

    // Lưu thông tin liên hệ vào local storage
    localStorage.setItem("contactInfo", JSON.stringify(contactInfo));

    // Thông báo gửi thông tin thành công
    alert("Send message successfully!!!");
    return true;
}
