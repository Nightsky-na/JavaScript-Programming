(() => {
  // เริ่มเขียนโค้ด

  function displaySuccess(){
    document.body.innerHTML = '';
    const pElem = document.createElement('p');
    pElem.innerHTML = 'You have been logged in sucessfuly';
    pElem.classList.add('success');
    document.body.appendChild(pElem);
  }
  
  function displayError(elem, message) {
    const smallElem = elem.parentElement.querySelector('small'); // go to div first
    smallElem.innerText = message;
    elem.classList.add('invalid');
    form.classList.add('invalid');
  }

  function resetState(elem){
    const smallElem = elem.parentElement.querySelector('small'); // go to div first
    smallElem.innerText = '';
    elem.classList.remove('invalid');
    form.classList.remove('invalid');
  }
  
  function validateLength(elem, min, max){
    // const x = elem.value;
    // console.log(x);
    const val = elem.value;

    if (val.length < min || val.length > max) {
      const elemName = elem.getAttribute('name');
      displayError(elem, `${elemName} length must be between ${min} and ${max}`);
    }
  }

  function validateEmail(elem){
    const regex = /\S+@\S+\.\S+/;
    console.log('regexxxxxxxxxxx')
    if (!regex.test(elem.value)) {
      displayError(elem, 'Email must be valid');
    }
  }
  
  function validateForm(event) {
    event.preventDefault(); // ใช้ให้เวลา กด Submit แล้ว ไม่ refresh browser

    const emailElem = document.getElementById('email');
    const passWordElem = document.getElementById('password');

    resetState(emailElem);
    resetState(passWordElem);

    // console.log(emailElem);
    // console.log(passWordElem);
    validateLength(emailElem, 10, 20);
    validateLength(passWordElem, 8, 20);

    validateEmail(emailElem);

    const isValidForm = !form.classList.contains('invalid');

    if(isValidForm) {
      displaySuccess();
    }
  }
  
  function run() {
    const formElem = document.querySelector('form');
    formElem.addEventListener('submit', validateForm);
  }

  run();
})();
