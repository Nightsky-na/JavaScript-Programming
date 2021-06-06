(()=>{
    //Start coding
    let draggingElem; 

    function onDragStart(){
        draggingElem = this; // This is elem that we drag
        // console.log(draggingElem);
    }

    function onDrop() {
        //console.log('drop'); // Don't happen ;-; if we don't have fn onDragOver() and onDragEnter()
        this.append(draggingElem); // ย้ายกล่อง
        draggingElem = null; // restart ค่า graggingElem 
    }

    function onDragOver(event) {
        event.preventDefault(); // If this fn happen cancel behaver ปกติออกไป
    }

    function onDragEnter(event) {
        event.preventDefault(); // cancel behaver ปกติออกไป
    }

    function run(){
        // document.querySelectorAll(`.task`); //Node list need to convert to array
        const taskElems = Array.from(document.querySelectorAll(`.task`)); // Use Array.from(...) to change to array
        // console.log(taskElem);
        const dropZoneElems = Array.from(document.querySelectorAll(`.drop-zone`));

        taskElems.forEach((taskElem)=>{
            taskElem.addEventListener('dragstart',onDragStart);
        });

        dropZoneElems.forEach((dropZoneElem)=>{
            dropZoneElem.addEventListener('drop',onDrop);
            dropZoneElem.addEventListener('dragover',onDragOver);
            dropZoneElem.addEventListener('dragenter',onDragEnter);
        });
    }
    run();
})();