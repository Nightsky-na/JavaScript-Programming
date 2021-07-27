(() => {
  // เริ่มเขียนโค้ด
  const carBrands = [
    'BMW',
    'Maserati',
    'Mercedes Benz',
    'Ferrari',
    'Toyota',
    'Honda',
    'Hyundai'
  ];

  const searchElem = document.querySelector('.search');

  function clearResult() {
    const ulElem = document.querySelector('.results');
    if(ulElem) {
      document.body.removeChild(ulElem);
    }
  }
  
  function selectCarBrand(event){
    // console.log(event.target.innerText);
    // event.target.innerText
    searchElem.value = event.target.innerText;
    clearResult();
  }
  
  function onInput(event) {
    const inputText = event.target.value.toLowerCase();

    const matchCarBrands = carBrands.filter(carBrand => carBrand.toLowerCase().startsWith(inputText)) // array
    // console.log(matchCarBrands);
    //สร้างdrop down 

    const ulElem = document.createElement('ul');
    ulElem.classList.add('results');

    matchCarBrands.forEach(carBrand => {
      const liElem = document.createElement('li');
      liElem.innerHTML = carBrand;
      liElem.onclick = selectCarBrand;
      ulElem.appendChild(liElem);
    });
    // console.log(ulElem);
    document.body.appendChild(ulElem);
  }
  
  function run(){
    searchElem.addEventListener('input', onInput);
    document.addEventListener('click', clearResult);
  }
  
  run();
})();
