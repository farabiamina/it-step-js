// CRUD = create read update delete
// create = POST
// read = GET
// update = PUT, PATCH
// delete = DELETE

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

function setCookie(cookieName, cookieValue, exdays) {
    const date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 *1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

const userId = getCookie('user_id');
console.log(userId);

let usernameSpan = document.getElementById('username');

let logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', logout);

let deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', deleteUser);

let updateBtn = document.getElementById('update');
updateBtn.addEventListener('click', updateUsername);

let user = null;

async function getUser() {
    // const response = await fetch(`https://crudcrud.com/api/8b3d9ba32c0c4dbe8d766b56f9766f33/users/${userId}`);
    const response = await fetch(`https://crudcrud.com/api/ef336479fe8c42518b2f4332d788fafc/users/${userId}`);
    user = await response.json();
    usernameSpan.innerHTML = user.username;
    return user;
}

function logout() {
    setCookie('user_id', user._id, -1);
    window.location = 'http://127.0.0.1:8080/register.html';
}

async function deleteUser() {
    const response = await fetch(`https://crudcrud.com/api/ef336479fe8c42518b2f4332d788fafc/users/${userId}`, {
        method: "DELETE",
    });
    const data = response.json();
    console.log(data);
    logout();
}

async function updateUsername() {
    let newUsername = prompt('Введите новое имя пользователя');
    const response = await fetch(`https://crudcrud.com/api/ef336479fe8c42518b2f4332d788fafc/users/${userId}`, {
        method: "PUT",
        headers: {
            "Content-type": "Application/json",
        },
        body: JSON.stringify({username: newUsername, email: user.email, password: user.password}),
    });
    // const data = response.json();
    // console.log(data);
    usernameSpan.innerHTML = user.username;
}

// PUT - требует в body все поля, если указываем не все поля, остальные удалятся
// PATCH - отправляем в body только те поля, которые хотим изменить

window.addEventListener('DOMContentLoaded', checkAuth);

function checkAuth() {
    if (getCookie("user_id") === "") {
        window.location = 'http://127.0.0.1:8080/register.html';
    }
    else {
        getUser();
    }
}