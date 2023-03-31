let registerBtn = document.getElementById('log-btn');
registerBtn.addEventListener('click', login);

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

async function login(e) {
    e.preventDefault();
    let myUser = null;
    let form = document.forms.login;
    let username = form.elements.username.value;
    let password = form.elements.password.value;

    const response = await fetch('https://crudcrud.com/api/ce1e6a3c223249dcac749d2f21743b71/users');
    const users = await response.json();
    // console.log(users);

    let findUser = false;
    for (let user of users) {
        // console.log(user.username, username);
        // console.log(user.password, password);
        if (user.username === username && user.password === password) {
           myUser = user;
           findUser = true;
           break;
        }
    }
    if (findUser === false) {
        alert("Не получилось найти юзера");
    }
    setCookie('user_id', myUser._id, 30);
    window.location = 'http://127.0.0.1:8080/home.html';
}

window.addEventListener('DOMContentLoaded', checkAuth);

function checkAuth() {
    if (getCookie("user_id") !== "") {
        window.location = 'http://127.0.0.1:8080/home.html';
    }
}