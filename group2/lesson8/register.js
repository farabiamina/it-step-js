// Cookie 
function setCookie(cookieName, cookieValue, exdays) {
    const date = new Date();
    date.setTime(date.getTime() + (exdays*24*60*60*1000));
    let expires = 'expires='+date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path='/'";
}

// document.cookie = "user_id=123;expires=Thu, 01 Jan 2000 00:00:00 UTC; path=/;"

//  Registration
let regBtn = document.getElementById('reg-btn');
regBtn.addEventListener('click', register);

async function register(e) {
    e.preventDefault();
    let registrationForm = document.forms.register;
    let email = registrationForm.elements.email.value;
    let username = registrationForm.elements.username.value;
    let password = registrationForm.elements.password.value;
    // console.log(email, password);
    const response = await fetch('https://crudcrud.com/api/2c82c88eacc34781b7b00887f193ec96/customers', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email: email, username: username, password: password}),
        }
    )
    if (response.status === 201) {
        const user = await response.json();
        setCookie("user_id", user._id, 30);
        window.location = "http://127.0.0.1:8080/home.html";
    }
    else {
        console.log("Не получилось создать пользователя");
    }
}