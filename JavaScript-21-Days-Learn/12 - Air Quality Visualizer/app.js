(()=>{
    const KEY = '41b2592c-0864-4263-b771-f1252f1d57de';

    function displayAirQuality({city,state,country,aqi,temperature,humidity,wind}) {
        const cityElem = document.querySelector(`.city`);
        const stateCountryElem = document.querySelector(`.state-country`);
        const aqiElem = document.querySelector(`.aqi > h1`); // ดึง h1 ใน class api
        const temperatureElem = document.querySelector(`.temperature`);
        const humidityElem = document.querySelector(`.humidity`);
        const windElem = document.querySelector(`.wind`);
        // console.log(city);
        cityElem.innerText = city;
        stateCountryElem.innerText = `${state},${country}`
        aqiElem.innerText = aqi;
        temperatureElem.innerText = `Temp: ${temperature}`;
        humidityElem.innerText = `Humidity: ${humidity}`;
        windElem.innerText = `Wind: ${wind} m/s`
    }

    function setAirQualityColor(aqi){
        if (aqi <= 50) {
            document.documentElement.style.setProperty(
                '--current-aqi-color',
                'var(--good-aqi-color)'
            );
        } else if (aqi <= 100){
            document.documentElement.style.setProperty(
                '--current-aqi-color',
                'var(--medium-aqi-color)'
            );
        } else {
            document.documentElement.style.setProperty(
                '--current-aqi-color',
                'var(--bad-aqi-color)'
            );
        }
    }

    async function getAirQuality({city, state, country}) {
        const response = await fetch(
            `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${KEY}`
        );//function ที่ใช้ยิ่ง api // async for wait this function //status: 400,
        //status 200 -> สำเร็จ
        // asynconus function
        // const result = await response.json();
        const {data: {current}} = await response.json();
        const {pollution, weather } = current;
        // console.log( weather);
        // console.log(response);
        // console.log(result);
        return {
            aqi: pollution.aqius,
            temperature: weather.tp,
            humidity: weather.hu,
            wind: weather.ws
        };
    }

    async function run() {
        const city = 'Sathon';
        const state = 'Bangkok';
        const country = 'Thailand'; 
        // console.log(city);
        const {aqi, temperature, humidity, wind} = await getAirQuality({city, state, country}); // Pass by sent the obj -> ส่งเป็นobj เพราะเราดึงค่า ตป. ไม่ต้องนึกถึงลำดับ
        //ส่งเป็น obj และก็ใช้ desturcter

        displayAirQuality({
            city,
            state,
            country,
            aqi,
            temperature,
            humidity,
            wind
        });

        setAirQualityColor(aqi);
    }
    run();
})();