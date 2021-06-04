(() => {
    // เริ่มเขียนโค้ด
  
    // 1. How Asynchronous code works in JavaScript
    // function simulateAsyncAPI(text, timeout) {
    //     setTimeout(()=>console.log(text), timeout);
    // }
    // simulateAsyncAPI('A',1000);
    // simulateAsyncAPI('B',100);
    // simulateAsyncAPI('C',500);

    // 2. Callback
    // function simulateAsyncAPI(text, timeout, callback) {
    //     setTimeout(() => {
    //         console.log(text);
    //         if (callback) {
    //             callback();
    //         } // Check have function or not
    //     }, timeout);
    // }

    // // Call back help
    // simulateAsyncAPI('A',1000,() => {
    //     simulateAsyncAPI('B',500,() => {
    //         simulateAsyncAPI('C',100);
    //     });
    // });

    // 3. Promise -> .then , .catch
    // function simulateAsyncAPI(text, timeout) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(()=>{
    //             if (text === 'B') return reject('B got rejected'); // Error
    //             console.log(text);
    //             resolve(); // บอกว่า Asynchronous fn ทำงานเสร็จแล้ว
    //         }, timeout);
    //     });
    // } 

    // simulateAsyncAPI('A',1000)
    //     .then(()=>{
    //         // console.log('Promised');
    //         return simulateAsyncAPI('B', 500);
    //     })
    //     .then(()=>{
    //         return simulateAsyncAPI('C', 100);
    //     })
    //     .catch((error)=> {
    //         console.error(error);
    //     })
       // 4. Async/Await
       function simulateAsyncAPI(text, timeout) {
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    // if (text === 'B') return reject('B got rejected'); // Error
                    console.log(text);
                    resolve(); // บอกว่า Asynchronous fn ทำงานเสร็จแล้ว
                }, timeout);
            });
        } 

        async function run() {
            try {
                await simulateAsyncAPI('A',1000);
                simulateAsyncAPI('M',1);
                await simulateAsyncAPI('B',500);
                await simulateAsyncAPI('C',100);
            } catch(error) {
                console.error(error);
            }
        }
        // function run() {
        //     simulateAsyncAPI('A',1000);
        //     simulateAsyncAPI('B',100);
        // }
        run();
  })();
  