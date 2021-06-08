(() => {
    // javaScript เป็นภาษาที่แปลกแตกต่าง

    // 1. NaN -> not a number primitive type  define equal null 
    // NaN ไม่เท่ากับ ตัว มันเอง เพราะ ป้องกันความผิดพลาด (NaN/ NaN === 1) (NaN *1 === NaN)
    // วิธีเช็คว่าเป็น  NaN หรือป่าว

    if (NaN === NaN){
        console.log('equal');
    }

    const result = 1 / 'hello';
    console.log(result); // not a number -> result is Nan

    if (Number.isNaN(result)) {
        console.log(`Equal to NaN`);
    } // Java Script NaN ไม่เ่ท่ากับตัวเอง ต้องใช้ function เข้ามาช่วย


    // 2. Type Coercion -> การแปลง Type อัตโนมัติ ใน JS

    if (1 <  2 < 3) {
        console.log(`Inside`);
    } // Print inside 

    if (3 > 2 > 1) {
        console.log(`Inside`); 
    } // did not print 

    console.log(2 - '1'); // Ans is 1

    console.log(2 +'1'); // Ans is 21
    console.log(2 + Number.parseInt('1',10)); // แปลง 1 เป็นเลขฐาน 10 

    console.log(true+true); // 1+ 1 = 2

    // 3. Interpreter & Compiler - > // ตรง return ต้องติดกับ {}
    function getPerson() {
        return{
            name: 'Kontawat'
        }; // ต้องใส่ ;

    }
    console.log(getPerson()); //Undefind

    // 4. Checking Object Type // Check my variable is obj or not 
    const person = {};
    const student = null;
    if (typeof person === 'object'){
        console.log('Yes, object');
    }

    if (typeof student === 'object'){
        console.log('Yes, object');
    } // Null is obj 

    // วิธีเช็ค เป็นobj ไหม 
    if(typeof student === 'object' && student !== null){
        console.log('Yes, object');
    }
})();