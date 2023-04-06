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
    const response = await fetch(`https://crudcrud.com/api/ce1e6a3c223249dcac749d2f21743b71/users/${userId}`);
    user = await response.json();
    usernameSpan.innerHTML = user.username;
    return user;
}

function logout() {
    setCookie('user_id', user._id, -1);
    window.location = 'http://127.0.0.1:8080/register.html';
}

// fetch(url, configObj)

async function deleteUser() {
    const config = {
        method: "DELETE",
    }
    fetch(`https://crudcrud.com/api/ce1e6a3c223249dcac749d2f21743b71/users/${userId}`, config);
    // const data = await response.json();
    // console.log(data);
    logout();
}

async function updateUsername() {
    let newUsername = prompt('Введите новое имя пользователя');
    const currentUser = getUser();
    // let arr1 = [1,2,3,4];
    // let arr2 = [...arr1];

    // let updatedUser = {
    //     ...currentUser,
    //     username: newUsername,
    // };
    let updatedUser = {
        ...currentUser,
        username: newUsername,
    };
    // let updatedUsernameObject = {username: newUsername};
    const config = { // ...config = 
        method: 'PUT', // 'PATCH'
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
    };
    const response = await fetch(`https://crudcrud.com/api/ce1e6a3c223249dcac749d2f21743b71/users/${userId}`, config);
    updatedUser = await response.json();
    usernameSpan.innerHTML = updatedUser.username;
    // console.log();
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