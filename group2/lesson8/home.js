function getCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookies = decodedCookie.split(";");
  //  "a=av;b=bv;"
  for (let i = 0; i < cookies.length; i++) {
    // ['a=av', 'b=bv', ...]
    let cookie = cookies[i]; // 'a=av'
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
    date.setTime(date.getTime() + (exdays*24*60*60*1000));
    let expires = 'expires='+date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path='/'";
}

let userId = getCookie("user_id");
console.log(userId);

let userNameSpan = document.getElementById('user-name');
let logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', logout);

async function getUser() {
    // const response = await fetch(`https://crudcrud.com/api/2c82c88eacc34781b7b00887f193ec96/customers/${userId}`)
    const response = await fetch(`https://6412dad8b1ea7443031af7f2.mockapi.io/users/${userId}`)
    if (response.status === 200) {
        const user = await response.json();
        userNameSpan.innerHTML = user.username;
    }
    else {
        console.log("Не получилось найти пользователя");
    }
    return user;
}

function deleteCookie(cookieName) {
    setCookie(cookieName,"",-1);
}

function logout() {
    deleteCookie('user_id');
    window.location = "http://127.0.0.1:8080/register.html";
}

window.addEventListener('DOMContentLoaded', getUser);