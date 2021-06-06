(()=>{

    function onScroll() {
        // document.querySelectorAll(`section`) // same array but it not array 
        const sectionElems = Array.from(document.querySelectorAll(`section`));  //-> change to array
        // console.log(sectionElems);
        sectionElems.forEach((sectionElem)=> {
            const imgElem = sectionElem.querySelector(`img`);
            const textElem = sectionElem.querySelector(`.text`);

            const scrollPosition = window.pageYOffset; // Use for find that value how far we are scroll? 
            // console.log(scrollPosition);
            const revealPosition = imgElem.offsetTop + imgElem.offsetHeight/10; //การบอกว่าสัก 1/10 ต้องการแสดงผล ตน บน บากกับอัก สิบประเซนต์ // ขอบบนเว็บ

            if(scrollPosition>= revealPosition){
                textElem.classList.add('reveal'); // add class
            }

        })
    }

    function run() {
        document.addEventListener('scroll',onScroll)    
    }
    run();
})();