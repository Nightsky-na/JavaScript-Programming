(()=>{
    // Start coding
    function onScroll() {
        const moonElem = document.querySelector(`.moon`);
        const wishElem = document.querySelector(`.wish`);

        //console.log(window.scrollY);  // Use for get value that how far we scrollY
        moonElem.style.transform = `translate(${window.scrollY * 0.7}%, ${window.scrollY * -0.7}%)`; 
        //{ window.scrollY * 0.7}% เลือนขวา , {window.scrollY * -0.7} เลื่อนจากด้านล่างขึ้นข้างบน ลบ เพราะจะได้เลื่อนขึ้น
        wishElem.style.transform = `translateY(${window.scrollY * -1.2}%)`
    }

    function run() {
        document.addEventListener('scroll',onScroll);
    }

    run();
})();