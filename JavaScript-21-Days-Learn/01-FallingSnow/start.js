(()=>{
    function setUp() {
        // const canvas = document.querySelector(`#falling-snow-canvas`);
        // coust canvas = document.getElementById('falling-snow-canvas');
        const canvas = document.getElementById('falling-snow-canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        return{
            canvas,
            canvasContext: canvas.getContext('2d'),
            numberOfSnowBalls: 250
        }
    }
    function random(min, max) {
        // Math.floor -> ปัดลง
        // Math.ramdom -> 0 - 0.99
        // Random num min-max
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createSnowBalls(canvas, numberOfSnowBalls) {
        //spread is Spread นั้นเป็น Operator ที่เราสามารถแจกแจงสมาชิกของตัวแปรได้ -> ... is spread
        // const x = [...Array(numberOfSnowBalls)].map(()=>{
        return [...Array(numberOfSnowBalls)].map(()=>{
            return {
                x: random(0, canvas.width),
                y: random(0, canvas.height),
                opacity: random(0.5, 1),
                radius: random(2, 4),
                speadX: random(-5, 5),
                speadY: random(1, 3)
            }
        });
        // console.log(x);
    }

    function drawSnowBall(canvasContext, snowBall) {
        canvasContext.beginPath(); // Start darw
        canvasContext.arc(snowBall.x, snowBall.y, snowBall.radius, 0, Math.PI*2);
        canvasContext.fillStyle = `rgba(255, 255, 255, ${snowBall.opacity})`;
        canvasContext.fill();
    }

    function moveSnowBall(snowBall, canvas) {
        snowBall.x += snowBall.speadX;
        snowBall.y += snowBall.speadY;

        if (snowBall.x > canvas.width) {
            snowBall.x = 0;
        } else if (snowBall.x < 0){
            snowBall.x = canvas.width;
        }

        if (snowBall.y > canvas.height) {
            snowBall.y = 0;
        }
    }

    function run() {
        const {canvas, canvasContext, numberOfSnowBalls} = setUp();
        const snowBalls = createSnowBalls(canvas,numberOfSnowBalls);
        // 50 ms
        setInterval(() => {
            canvasContext.clearRect(0, 0, canvas.width, canvas.width);
            snowBalls.forEach((snowBall) => drawSnowBall(canvasContext, snowBall));
            snowBalls.forEach((snowBall) => moveSnowBall(snowBall, canvas));
        }, 50);
    }
    run();
})();