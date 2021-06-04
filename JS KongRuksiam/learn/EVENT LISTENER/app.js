// อ้างอิงที่ element ที่เราต้องหาร
const menu = document.querySelector(`#menu`);
const display = document.querySelector(`#display`);
const btn = document.querySelector(`#btn`);

// write event
menu.addEventListener('change',getMenu);
btn.addEventListener('click',showWelcome);
function getMenu() {
    const menu = document.querySelector(`#menu`);
    // console.log(menu.value.toUpperCase());
    console.log(menu.value.toUpperCase());
    display.innerHTML = menu.value;
}

function showWelcome() {
    alert("ยินดีต้อนรับเข้าสู่หน้าเว็บ");
}

