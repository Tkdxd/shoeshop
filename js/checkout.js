function login() {
    // Lấy thông tin đăng nhập từ form đăng nhập
    let email = document.forms["loginForm"]["email"].value;
    let password = document.forms["loginForm"]["password"].value;

    // Kiểm tra thông tin từ form đăng nhập
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    if (!email.match(mailformat)) {
        alert("Email is not valid");
        return false;
    }

    // Thông tin đăng nhập hợp lệ, gửi thông tin đăng nhập lên server
    if (email === emailAccount && password === passwordAccount) {
        // Lưu username vào session storage
        sessionStorage.setItem("username", email.split("@")[0]);

        // Chuyển hướng trang sang index.html
        window.location = "index.html";
        return true;
    }
}
