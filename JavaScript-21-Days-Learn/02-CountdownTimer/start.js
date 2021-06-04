(() =>{
    //Start coding
    const SECOND = 1000; // ms
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    function  setElementInnerText(id, text) {
        const element = document.querySelector(id);
        element.innerText = text;
    }

    function countDown() {
        // gettime() -> ดึงเวลาเป็น unix time stamp 
        const now = new Date().getTime();
        const newYear = new Date('December 31, 2021 23:59:59').getTime();
        const unixTimeLeft = newYear - now;
        //unixTimeLeft -> cal to day
        // const dayElem = document.querySelector(`#days`);
        // dayElem.innerText = Math.floor(unixTimeLeft/DAY);
        setElementInnerText(`#days`, Math.floor(unixTimeLeft/DAY));
        // const hoursElem = document.querySelector(`#hours`);
        // hoursElem.innerText = Math.floor((unixTimeLeft%DAY) / HOUR);
        setElementInnerText(`#hours`,Math.floor((unixTimeLeft%DAY) / HOUR));
        setElementInnerText(`#minutes`, Math.floor((unixTimeLeft%HOUR) / MINUTE));
        setElementInnerText(`#seconds`, Math.floor((unixTimeLeft%MINUTE) / SECOND));
    }
    function run() {
        // countDown();
        setInterval(countDown, SECOND);
    }
    run();
})();