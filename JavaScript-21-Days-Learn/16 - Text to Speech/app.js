(()=>{
    const message = new SpeechSynthesisUtterance();

    function onVoicesChanged() {
        const voices = speechSynthesis.getVoices();
        // console.log(voices); // Return เสียงทั้งหมดออกมา เป็น array 
        const thVoice = voices.find(voices => voices.lang === 'th-TH');
        // ด้านบนเป็นการset เสียง
        message.voice = thVoice;
    }
    // speechSynthesis เป็น obj ที่มีใน browser

    function onClick(event) {
        // console.log(event.target); // รู่ว่า click ตรงไหน
        message.text = event.target.getAttribute('alt');
        speechSynthesis.speak(message);
    }
    
    function run(){
        speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);
        
        // const imgElem = document.querySelector(`image`);
        // const imgElem = document.querySelectorAll('image'); // -> ออกมาเป็น Node List
        const imgElems = Array.from(document.querySelectorAll('img'));
        // console.log(imgElems);
        imgElems.forEach(imgElem => imgElem.addEventListener('click', onClick));
    }

    run();
})();