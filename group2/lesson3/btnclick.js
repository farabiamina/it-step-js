let btns = document.getElementsByClassName("btn"); // [btn1, btn2, btn3]
for (let btn of btns) {
    btn.addEventListener("click", clickBtn);
}

function clickBtn() {
    console.log(this.innerHTML);
}