let uname = "John"; 
// скоенные кавычки сохраняют обрыв строки, остальные - нет 
let str = `Hello, ${uname}`; // интерполяция
let str2 = "Hello \nworld"; // обрыв строки
let str3 = 'I\'m';
alert(str2);
/*
Math.floor - в меньшую сторону
Math.ceil - в большую сторону
Math.round - по правилам математики
Math.trunc - убирает дробную часть
*/

let btns = document.getElementsByClassName("btn");
for (let btn of btns) {
    btn.addEventListener("click", btnClick);
}

function btnClick() {
    console.log(this.innerHTML);
}


