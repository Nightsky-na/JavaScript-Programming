(() => {
    const canvas = document.getElementById('painting');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext('2d');

    let previousPoint = { x:0, y:0 }; // the start point (location mouse)
    
    function getDistance(previousPoint, currentPoint) {
        return Math.sqrt((previousPoint.x - currentPoint.x) ** 2 + (previousPoint.y - currentPoint.y) ** 2);
    }

    function onMouseMove({ pageX, pageY }) {
        const currentPoint = { x:pageX, y:pageY}; 

        context.beginPath();

        context.lineCap = 'round'; // End point of line is circle
        context.lineJoin = 'round'; // Line join is circle
        const distance = getDistance(previousPoint, currentPoint);
        context.lineWidth = Math.random() / distance * 40 ;
        const opacity = Math.min(0.5, 1 /distance); // Set ค่า สูงสุด 0.5
        context.strokeStyle = `rgba(222, 10, 109, ${opacity})`;

        context.moveTo(previousPoint.x, previousPoint.y);// start point 
        context.lineTo(currentPoint.x, currentPoint.y); // Next point

        context.stroke(); // Start paint the line 
        context.closePath(); // end paint

        previousPoint = currentPoint;
    }

    function onMouseEnter({ pageX,pageY}) {
        previousPoint.x = pageX;
        previousPoint.y = pageY;
    }

    function run() {
        canvas.addEventListener('mousemove',onMouseMove);   
        canvas.addEventListener('mouseenter',onMouseEnter);   
        
    }
    run();
})();