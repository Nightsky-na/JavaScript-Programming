// Element.classList.add("class");
// Element.classList.remove("class");
// Element.classList.toggle("class");
// Element.classList.contains("class");
const box = document.querySelector(`#box`);
function addStyle() {
    box.classList.add("darkMode");
}

function deleteStyle() {
    box.classList.remove(box.className);
}

function changeStyle() {
    box.classList.toggle("darkMode"); // Do two thing add and remove
}

function isDarkMode() {
    const temp = document.createElement(`p`);
    if(box.classList.contains("darkMode")){
       temp.innerHTML = `อยู่ในDARK MODE`;
    } else {
        temp.innerHTML = `ไม่อยู่ในDARK MODE`;
    }
    box.appendChild(temp);
}

