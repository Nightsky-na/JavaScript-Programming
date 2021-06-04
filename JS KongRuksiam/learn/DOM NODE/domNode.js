// document.createElement(Element);
// document.removeChild(Element);
// document.append(Element);
// document.rereplaceChild(new,old);
let num = 4;
const textAll = document.querySelectorAll('p');
console.log(textAll);
let message = textAll[0].innerHTML;

console.log(textAll[0]);
console.log(textAll[1].innerHTML);
console.log(message);

const menu = document.querySelector('#menu');
function addItem() {
    num++;
    const item = document.createElement(`li`); //สร้างli
    item.setAttribute('id',`item-${num}`);
    item.innerText = `ITEM ${num}`; 
    menu.appendChild(item);  
}

function deleteItem() {
    // const item = document.getElementById(`item-${num}`);
    const item = document.querySelector(`#item-${num}`);
    menu.removeChild(item);
    num--;
}

function replaceChlid() {
    const item = document.querySelector(`#item-${num}`);
    // const item = document.getElementById(`item-${num}`);
    const temp = document.createElement('li');
    temp.setAttribute('id',`item-${num}`);
    temp.innerText = `REPLACE ${num}`; 
    menu.replaceChild(temp,item);

}
