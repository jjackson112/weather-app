const container = document.querySelector('.container');
const inputField = document.querySelector('input');
const weatherImg = document.querySelector('.first-part img')

inputField.addEventListener('keyup', (e) => {
    //console.log(e.target.value); the city name shows up in the console
    // if the user pressed entered btn and the input value is not empty
    if(e.key == 'Enter' && inputField.value != ""){
    //console.log('Hello, JavaScript!')
    requestApi(inputField.value);
    inputField.value = "";
    }
});

function requestApi(city){
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=27cd174a3b303dec7b59e42eadf52e77`;
    fetch(api).then(res => res.json()).then(result => weatherDetails(result));
}

function weatherDetails(info) {
    // key value pairs show up like clouds, humidity and timezones, etc
    console.log(info);

    // let's get required properties from the info object
    const city = info.name;
    const country = info.sys.country;
    const {description, id} = info.weather[0];
    const {feels_like, humidity, temp} = info.main;

    // let's pass these values to a particular html element
    
    container.querySelector('.temp .number').innerText = Math.floor(temp);
    container.querySelector('.temp .weather').innerText = description;
    container.querySelector('.location span').innerText = `${city} ${country}`;
    container.querySelector('.second-part .temp .number-2').innerText = Math.floor(feels_like);
    container.querySelector('.column-1 .details span').innerText = `${humidity}`;

    // use custom icon according to the id which api returns us

    if (id == 800) {
        weatherImg.src = "img/clear.png";
    } else if (id >= 200 && id <= 232) {
        weatherImg.src = "img/storm.png";
    } else if (id >= 600 && id <= 622) {
        weatherImg.src = "img/snow.png";
    } else if (id >= 701 && id <= 781) {
        weatherImg.src = "img/haze.png";
    } else if (id >= 801 && id <= 804) {
        weatherImg.src = "img/cloudy.png";
    } else if ((id >= 300 && id <= 321) || (id >= 500 && id <= 531)) {
        weatherImg.src = "img/rain.png";
    }
}