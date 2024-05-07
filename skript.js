// let apiKey = "88832530a984eedf4f18e38c8e19ff6c";

const kazan = fetch('https://api.openweathermap.org/data/2.5/weather?lat=55.7887&lon=49.1221&lang=ru&appid=88832530a984eedf4f18e38c8e19ff6c') //Казань


    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {

    });

    // https://openweathermap.org/img/wn/04n@2x.png
