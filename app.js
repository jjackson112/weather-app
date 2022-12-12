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

function requestApi(city) {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=27cd174a3b303dec7b59e42eadf52e77`;
    // the link shows up in the console
    // console.log(api);
    fetch(api).then(res => res.json()). then(result => weatherDetails(result))
}

function weatherDetails(info) {
    // key value pairs show up like clouds, humidity and timezones, etc
    // console.log(info);

    // let's get required properties from the info object
    const city = info.name;
    const country = info.sys.country;
    const {description, id} = info.weather[0];
    const [feels_like, humidity, temp] = info.main;

    // let's pass these values to a particular html element
    
    container.querySelector('.temp .number').innerText = Math.floor(temp);
    container.querySelector('.temp .weather').innerText = description;
    container.querySelector('.temp .number').innerText
}