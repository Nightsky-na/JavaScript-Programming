//Tag Name
// let a = document.getElementsByTagName('p'); // เอามาหมด
let a = document.querySelectorAll('p'); // Via tags
//Get by ID
let b = document.getElementById('demo'); 
let c= document.querySelector('#headDom'); // ID
let d = document.querySelector('.myJs'); // Class

const box = document.querySelector('.light');

console.log(a); // ข้อมูลในตัวแปลa
console.log(b);
console.log(c);
console.log(d);
let x = 10;
let y = 20;
//อ้างอิงใช้ const
//ประมวลผล let 
function displayText() {
    // b.innerText = "<strong>สอน Java Script เบื่องต้น</strong>"; // แสดงผล
    b.innerHTML = `<strong>แสดงข้อมูลในตัวแปร x = ${x}และ y = ${y}</strong>`; // แสดงผล
    c.innerHTML = `By KongRuksiam`;
    // d.innerHTML = '';
    b.style.color = "red";
    b.style.backgroundColor = "yellow";
    b.style.fontSize = "60px";

    d.setAttribute('class','kong');
}

function changeMode() {
    if (box.className==='light') {
        box.setAttribute('class','dark');
    }
    else {
        box.setAttribute('class','light');
    }
}


