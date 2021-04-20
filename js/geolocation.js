function requestGeolocation(positiveResult, errorResult) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(positiveResult, errorResult);
    } else {
        errorResult("Geolocation is not supported by this browser.");
    }
}

function getLocation(onAnswer) {
    requestGeolocation((position) => {
        onAnswer([position.coords.latitude, position.coords.longitude]);
    }, (e) => {
        alert("Вы не дали доступ к геоданным.");
    });
}

function alertLocation() {
    document.getElementById("city-name").innerText = 'Данные загружаются';
    document.getElementById("wind-speed").innerText ='Данные загружаются';
    document.getElementById("pressure").innerText = 'Данные загружаются';
    document.getElementById("humidity").innerText = 'Данные загружаются';
    document.getElementById("clouds").innerText = 'Данные загружаются';
    document.getElementById("latitude").innerText = 'Данные загружаются';
    document.getElementById("longitude").innerText = 'Данные загружаются';
    document.getElementById("temp").innerText = '';
    document.getElementById("weather").style.display="none";
    requestGeolocation((position) => {

        requestWeather(position.coords.latitude, position.coords.longitude, (Answer) => {
            console.log(JSON.stringify(Answer));
            var temp = Answer.main.temp;
            var pressure = Answer.main.pressure;
            var humidity = Answer.main.humidity;
            var wind = Answer.wind.speed;
            var clouds = Answer.clouds.all;
            var weatherImg = document.getElementById("weather");
            weatherImg.style.borderRadius = '50%';
            var isRainy = false;
            for (var x in Answer.weather) {
                if ((x.main === "Rain") || (x.main === "Snow")) {
                    isRainy = true;
                    break;
                }
            }

            if (isRainy) {
                weatherImg.setAttribute("src", "../img/sk2NgSo19ek.jpg");
            } else {
                weatherImg.setAttribute("src", "../img/M2tjhQmJe0o.jpg");
            }
            document.getElementById("weather").style.display="block";
            document.getElementById("city-name").innerText = Answer.name;
            document.getElementById("wind-speed").innerText = wind;
            document.getElementById("pressure").innerText = pressure;
            document.getElementById("humidity").innerText = humidity;
            document.getElementById("clouds").innerText = clouds;
            document.getElementById("latitude").innerText = Answer.coord.lat;
            document.getElementById("longitude").innerText = Answer.coord.lon;
            document.getElementById("temp").innerText = temp;
        })
    }, (e) => {
        getFastWeather("Москва", (Answer) => {
            console.log(JSON.stringify(Answer));
            var temp = Answer.main.temp;
            var pressure = Answer.main.pressure;
            var humidity = Answer.main.humidity;
            var wind = Answer.wind.speed;
            var clouds = Answer.clouds.all;
            document.getElementById("city-name").innerText = Answer.name;
            document.getElementById("wind-speed").innerText = wind;
            document.getElementById("pressure").innerText = pressure;
            document.getElementById("humidity").innerText = humidity;
            document.getElementById("clouds").innerText = clouds;
            document.getElementById("latitude").innerText = Answer.coord.lat;
            document.getElementById("longitude").innerText = Answer.coord.lon;
            document.getElementById("temp").innerText = temp;
        })
    })
}
