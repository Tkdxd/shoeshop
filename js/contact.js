let contact_infoormation = document.getElementsByClassName(
    "contact-infoormation"
)[0];
let contactInfo = localStorage.getItem("contactInfo") == "[]" ? [] : JSON.parse(localStorage.getItem("contactInfo"));
if (contactInfo == null) {
    localStorage.setItem("contactInfo", JSON.stringify([]));
}
contact_infoormation.innerHTML = `
                                    <h5>Contact Info</h5>
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

function sendMessage() {
    let name = document.forms["contact-form"]["name"].value;
    let email = document.forms["contact-form"]["email"].value;
    let message = document.forms["contact-form"]["message"].value;

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
    console.log(contactInfo);
    contactInfo.push({
        id: contactInfo.length + 1,
        name: name,
        email: email,
        message: message,
    });
    localStorage.setItem("contactInfo", JSON.stringify(contactInfo));
    alert("Send message successfully!!!");
    return true;
}
