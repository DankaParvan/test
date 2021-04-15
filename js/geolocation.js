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
    requestGeolocation((position) => {
        requestWeather(position.coords.latitude, position.coords.longitude, (Answer) => {
            console.log(JSON.stringify(Answer));
            var temp = Answer.main.temp;
            var pressure = Answer.main.pressure;
            var humidity = Answer.main.humidity;
            var wind = Answer.wind.speed;
            var clouds = Answer.clouds.all;
            document.getElementById("wind-speed").innerText = wind;
            document.getElementById("pressure").innerText = pressure;
            document.getElementById("humidity").innerText = humidity;
            document.getElementById("clouds").innerText = clouds;
            document.getElementById("latitude").innerText = position.coords.latitude;
            document.getElementById("longitude").innerText = position.coords.longitude;
            document.getElementById("temp").innerText = Math.trunc(temp);
        })
        // alert("position is " + position.coords.latitude + " " + position.coords.longitude);
    }, (e) => {
        getFastWeather("Москва", (Answer) => {
            console.log(JSON.stringify(Answer));
            var temp = Answer.main.temp;
            var pressure = Answer.main.pressure;
            var humidity = Answer.main.humidity;
            var wind = Answer.wind.speed;
            var clouds = Answer.clouds.all;
            document.getElementById("wind-speed").innerText = wind;
            document.getElementById("pressure").innerText = pressure;
            document.getElementById("humidity").innerText = humidity;
            document.getElementById("clouds").innerText = clouds;
            document.getElementById("latitude").innerText = position.coords.latitude;
            document.getElementById("longitude").innerText = position.coords.longitude;
            document.getElementById("temp").innerText = Math.trunc(temp);
        })
    })
}
