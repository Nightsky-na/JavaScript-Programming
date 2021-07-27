(() => {
  // เริ่มเขียนโค้ด

  // 1. Class vs Prototype
  // class Person {

  // } 

  // const varayut = new Person();
  // console.log(varayut);

  // 2. What's prototype?

  // const name = 'Varayut';
  // console.log(name.__proto__);

  // const arr = [];
  // console.log(arr.__proto__);

  // 3. Prototype chain

  // const name = 'Varayut';
  // console.log(name.__proto__);
  // console.log(name.toLocaleString());

  // 4. Extend a prototype
  const name = 'Varayut';
  function sayHello(val) {
    console.log(`Hello ${val}`);
  }
  String.prototype.sayHello = sayHello; //ADD METHOD TO PROTOTYPE 
  console.log(name.__proto__);

  name.sayHello('World');
})();
