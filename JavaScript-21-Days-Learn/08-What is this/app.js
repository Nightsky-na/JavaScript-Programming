(() => {
    // 1. Lexical scope & Dynamic scope

    // function printName() {
    //     console.log(this);  // Wideow -> gobal function 
    //     // This ขึ้นกับ วิธีการใช้ fn ไม่มีอะไรนำหน้า เลยใส่window มา
    // }

    // printName();
    
    // 2. How to know what is "this"?
    function printName() {
        console.log(this);
        console.log(`My name is ${this.name}`);
    }
    //// 2.1 Invoker object -> การใช้เป็น obj.fn
    // const kontawat = { name: 'Kontawat', printName: printName}; -> ละได้
    // const kontawat = { name: 'Kontawat', printName};
    // const titaya = { name: 'Titaya', printName};
    // printName(); // -> gobal object

    // kontawat.printName();
    /** -> obj
     * {name: "Kontawat", printName: ƒ}
        name: "Kontawat"
        printName: ƒ printName()
        __proto__: Object
     */
    // titaya.printName();
    /** -> obj
     * {name: "Titaya", printName: ƒ}
        name: "Titaya"
        printName: ƒ printName()
        __proto__: Object
     */

    //// 2.2 Global object (window, global)
    // name = 'Global'; // สร้างโดยไม่ใส่แะไรนำหน้า จะถูกASSINGเป็น proproty ของ Gobal or Window obj
    // printName();

    //// 2.3 Constructor function -> สร้าง opject จาก Function(constructor) 
    // function Person(name) {
    //     this.name = name;
    //     this.printName = printName;
    // }

    // const kontawat = new Person('Kontawat');
    // kontawat.printName();

    // 3. call(), apply(), and bind() -> Use for foce this value 

    function printName(nationality, city) {
        console.log(this);
        console.log(`My name is ${this.name}, I'm ${nationality} and am living in ${city}`);
    }

    function Person(name, nationality, city) {
        this.name = name;
        this.nationality = nationality;
        this.city = city;

        printName(nationality,city); // This name is gobal.
        printName.call(this, this.nationality, this.city); // Set this value is the obj that we create 
        printName.apply(this, [this.nationality, this.city]);

        const printKontawat = printName.bind(this); // bind return the new function
        printKontawat(this.nationality, this.city); 
    }

    const kontawat = new Person('Konatwat', 'Thai', 'Phrae');
    
})();
