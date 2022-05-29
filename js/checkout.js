function login() {
    let email = document.forms["loginForm"]["email"].value;
    let password = document.forms["loginForm"]["password"].value;
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

    if (email === emailAccount && password === passwordAccount) {
        sessionStorage.setItem("username", email.split("@")[0]);
        window.location = "index.html";
        return true;
    }
}

function register() {
    let email = document.forms["registerForm"]["email"].value;
    let password = document.forms["registerForm"]["password"].value;
    let confirmedPassword =
        document.forms["registerForm"]["confirmedPassword"].value;

    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    if (confirmedPassword !== password) {
        alert("Password is not match");
        return false;
    }
    if (!email.match(mailformat)) {
        alert("Email is not valid");
        return false;
    }
    if (
        email === emailAccount &&
        password === passwordAccount &&
        confirmedPassword === password
    ) {
        sessionStorage.setItem("username", email.split("@")[0]);
        window.location = "index.html";
        return true;
    }
}
