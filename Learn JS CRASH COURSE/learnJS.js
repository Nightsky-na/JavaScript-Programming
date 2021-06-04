// ที่ในการเก็บข้อมูล ในหน่วยความจำคอมพิวเตอร์
//var let const
//const ห้ามเปลียน
//let เปลี่ยนได้
// var ปัญหาเยอะ
// ห้ามใช้คำสงวน เลขขึ้นต้น สัญญาลักษณ์


// Primitive type
/*
 *String
 *Number
 *Boolean
 *Undefined
 *Null ไม่มีค่า
 *Symbol
 *Bigint same num but can store more than number
 */ 

// Reference Types
/**
 * Object
 * Array -> store the value same data type 
 * Function 
 */

const myName = 'Kontawat';
let height = 175; // Number
let isMale = true; // Boolean
// let city; // Undefind ไม่เคย assiang ค่า
let city = null; // ไม่มีค่า
let bigNumber = 10n; // Bigint
// console.log(name);
// console.log(height);
// console.log(isMale);
// console.log(city)
console.log(myName, height, isMale, city, bigNumber);

// Create obj
const person = {
    name: 'Kontawat',
    city: 'Phrae',
    height: 175
};
console.log(person);
// OUTPUT: {name: "Kontawat", city: "Phrae", height: 175}
console.log(person.name);
person.height = 180;
console.log(person.height);

person.weight = 70;
console.log(person);

// Array
const numbers = [5, 10, 15, 20];
console.log(numbers);
numbers[0] = 30;
console.log(numbers);
console.log(numbers[3]);
// add value in array
numbers.push(25);
console.log(numbers);
// methode คือ มีobj นำหน้า but function คือ ใช้ได้เลย
// ลบค่าหลังสุด
numbers.pop();
console.log(numbers);
//เพิ่มค่าด้านหน้า
numbers.unshift(1);
console.log(numbers);
//ลบค่าด้านหน้า
numbers.shift();
console.log(numbers);
//Arithmetic operator
// + - * / **
let result = 11 % 2;
console.log(result);

let ans = 10 + 5 * 2 ** 2;
console.log(ans);

//Condition in JS
/**
 * === equal
 * !== Not equal
 * >
 * <
 * >=
 * <=
 * _________________________________
 * and &&
 * or ||
 * not !
 */
const age = 25;
if (age > 18) {
    console.log('Age is more than 18');
} else {
    console.log('Age is less than or equal to 18');
}

let password = 'abcdefgh';

if(password === ''){
    console.log('Password is required');
} else if (password.length>=8 && password.length <= 12) {
    console.log('Password is valid');
} else {
    console.log('Password is invalid');
}

//Function 

function add(a, b) {
    return a+b;
}

function calculateVat(money, vat) {
    return money * vat/100;
}

const totalVat = calculateVat(100, 7);
console.log(totalVat);

// Flow controls -> loop untile false
for(let i = 0; i<10;i++){
    console.log(i);
}

for (let counter = 0; counter < 10 ;counter++) {
    if(counter % 2 !== 0){
        continue; // counter++ ต่อ ไม่ปริ้น
    }
    console.log(counter);
}

// DOM Manipulation -> Document Object Model การจัดการhtml โดย ใช้ เป็น tree แปลงให้ html เป็น obj
// document.querySelector('input');
// document.getElementById('email');
// document.createElement('div');
// document.appendChild(element);

// Event -> happen when user do sth 
// const btnElem = document.querySelector('button');
// btnElem.addEventListener('click', onClick);

// function  onClick(event) {
//     console.log(event.target);
// }