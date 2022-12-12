const container = document.querySelector('.container');
const inputField = document.querySelector('input');

inputField.addEventListener('keyup', (e) => {
    //console.log(e.target.value); the city name shows up in the console
    // if the user pressed entered btn and the input value is not empty
    if(e.key == 'Enter' && inputField.value != ""){
    //console.log('Hello, JavaScript!')
    inputField.value = "";
    requestApi(inputField.value);
    }
});