function requestGeolocation(positiveResult, errorResult) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(positiveResult, errorResult);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
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
        alert("position is " + position.coords.latitude + " " + position.coords.longitude);
    }, (e) => {
        alert("error is " + e);
    })
}