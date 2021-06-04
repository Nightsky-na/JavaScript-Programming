//DOM EVENT
// แจ้ง user การกระทำไม่ถูกหรือถูก การกระทำ user event ตอบสนอง
/**
 * onfocus=""
 * onblur=""
 * onchange=""
 * onselect=""
 * onsubmit=""
 * onMouseover=""
 * onMouseout=""
 * onclick=""
 * onload=""
 * onunload=""
 */
function welcome() {
    // alert(`ยินดีต้อนรับ`);
}

function hightLight(obj) {
    obj.style.background = "yellow";
}

function unHightLight(obj) {
    obj.style.background = "white";
}

function getMenu() {
    const menu = document.querySelector(`#menu`);
    // console.log(menu.value.toUpperCase());
    const display = document.querySelector(`#display`)
    console.log(menu.value.toUpperCase());
    display.innerHTML = menu.value;
}