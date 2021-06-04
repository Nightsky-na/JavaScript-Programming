(()=>{
    function run() {
        const bodyElem = document.querySelector(`body`);
        const eyeElems = document.querySelectorAll(`.eye`);

        function onMoveMove({pageX, pageY}) {
            eyeElems.forEach((eyeElem)=> {
                const {left, top} = eyeElem.getBoundingClientRect();

                const eyeCenterX = left + eyeElem.offsetWidth / 2;
                const eyeCenterY = top + eyeElem.offsetHeight / 2;
                const randian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY); // Cal radian
                const angle = randian * 180 / Math.PI * -1;
                // console.log(angle);
                eyeElem.style.transform = `rotate(${angle}deg)`;
            });
        }
        bodyElem.addEventListener('mousemove',onMoveMove);
    }
    run();
})();