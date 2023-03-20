let logBtn = document.getElementById("log-btn");
logBtn.addEventListener("click", login);

function setCookie(cookieName, cookieValue, exdays) {
  const date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie =
    cookieName + "=" + cookieValue + ";" + expires + ";path='/'";
}

async function login(e) {
  e.preventDefault();
  let myUser = null;
  let users = [];
  let registrationForm = document.forms.login;
  let username = registrationForm.elements.username.value;
  let password = registrationForm.elements.password.value;

  const response = await fetch(
    "https://6412dad8b1ea7443031af7f2.mockapi.io/users" 
    // другой ресурс так как кончились запросы на crudcrud
  );
  if (response.status === 200) {
    users = await response.json();
    for (let user of users) {
      if (user.username === username) {
        if (user.password === password) {
          myUser = user;
          setCookie("user_id", user._id, 30);
          window.location = "http://127.0.0.1:8080/home.html";
        }
        else {
            alert('Неправильный пароль');
            return;
        }
      }
    }
  } else {
    console.log("Не получилось авторизоваться");
  }
  return myUser;
}
