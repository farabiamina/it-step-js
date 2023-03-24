let registerBtn = document.getElementById('reg-btn');
registerBtn.addEventListener('click', register);

function setCookie(cookieName, cookieValue, exdays) {
    const date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 *1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
    let name = cookieName + "=";
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) == " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// name=John;expires=Thu, 01 Jan 2023 00:00:00; path=/;

async function register(e) {
    e.preventDefault();
    let form = document.forms.register;
    let email = form.elements.email.value;
    let username = form.elements.username.value;
    let password = form.elements.password.value;

    const response = await fetch('https://crudcrud.com/api/8b3d9ba32c0c4dbe8d766b56f9766f33/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({email: email, username: username, password: password}),
    });
    const user = await response.json();
    setCookie('user_id', user._id, 30);
    console.log(user);
    window.location = 'http://127.0.0.1:8080/home.html';
}

window.addEventListener('DOMContentLoaded', checkAuth);

function checkAuth() {
    console.log('h');

    if (getCookie("user_id") !== "") {
        window.location = 'http://127.0.0.1:8080/home.html';
    }
}