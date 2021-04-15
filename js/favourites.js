let addButton=document.getElementById("buttonDonate");
let formAdd=document.getElementById("newCity");
let counter=0;
let newCityData;

localStorageInit();
forEachFavourite((newCityName) => {
    getFastWeather(newCityName, (res) => {newCityData=JSON.stringify(res);
        let FavouritesCity=document.createElement("li")
        FavouritesCity.setAttribute("name",res.name);
        FavouritesCity.classList.add("cityBlock" ,"mb25");
        FavouritesCity.innerHTML='<div class="cityName">\n' +
            '                <h3 class="name">'+ res.name +'</h3>\n' +
            '                <div class="temperature"><span>'+ Math.trunc(res.main.temp) +'°C</span></div>\n' +
            '                <img class="animeWeather" src="img/animeWeather.jpeg" alt="weatherIcon">\n' +
            '                <button class="krest">\n' +
            '                    <img class="krestStyles" onclick="clearFavourite(this);" src="img/animeKrest-removebg-preview.png" alt="krest">\n' +
            '                </button>\n' +
            '            </div>\n' +
            '            <div class="cityDesc">\n' +
            '                <ul>\n' +
            '                    <li class="wind">\n' +
            '                        <div class=infoName>Ветер</div>\n' +
            '                        <div class="info">Moderate breeze, <span>' + res.wind.speed + 'm/s</span>, North-northwest</div>\n' +
            '                    </li>\n' +
            '                    <li class="cloudy">\n' +
            '                        <div class=infoName>Облачность</div>\n' +
            '                        <div class="info"><span>' + res.clouds.all + '</span></div>\n' +
            '                    </li>\n' +
            '                    <li class="pressure">\n' +
            '                        <div class=infoName>Давление</div>\n' +
            '                        <div class="info"><span>' + res.main.pressure + 'hpa</span></div>\n' +
            '                    </li>\n' +
            '                    <li class="humidity">\n' +
            '                        <div class=infoName>Влажность</div>\n' +
            '                        <div class="info"><span>'+ res.main.humidity +'%</span></div>\n' +
            '                    </li>\n' +
            '                    <li class="coordinates">\n' +
            '                        <div class=infoName>Координаты</div>\n' +
            '                        <div class="info">[<span>'+ res.coord.lat +'</span>,<span>'+ res.coord.lon +'</span>]</div>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '            </div>';

        document.getElementById("FavouritesCities").appendChild(FavouritesCity);});

});


addButton.onclick = function () {
    let newCityName=document.getElementById("newCityName").value;
    addFavourite(newCityName);
    getFastWeather(newCityName, (res) => {newCityData=JSON.stringify(res);
        let FavouritesCity=document.createElement("li")
        FavouritesCity.setAttribute("name",res.name);
        FavouritesCity.classList.add("cityBlock" ,"mb25");
        FavouritesCity.innerHTML='<div class="cityName">\n' +
            '                <h3 class="name">'+ res.name +'</h3>\n' +
            '                <div class="temperature"><span>'+ Math.trunc(res.main.temp) +'°C</span></div>\n' +
            '                <img class="animeWeather" src="img/animeWeather.jpeg" alt="weatherIcon">\n' +
            '                <button class="krest">\n' +
            '                    <img class="krestStyles" onclick="clearFavourite(this);" src="img/animeKrest-removebg-preview.png" alt="krest">\n' +
            '                </button>\n' +
            '            </div>\n' +
            '            <div class="cityDesc">\n' +
            '                <ul>\n' +
            '                    <li class="wind">\n' +
            '                        <div class=infoName>Ветер</div>\n' +
            '                        <div class="info">Moderate breeze, <span>' + res.wind.speed + 'm/s</span>, North-northwest</div>\n' +
            '                    </li>\n' +
            '                    <li class="cloudy">\n' +
            '                        <div class=infoName>Облачность</div>\n' +
            '                        <div class="info"><span>' + res.clouds.all + '</span></div>\n' +
            '                    </li>\n' +
            '                    <li class="pressure">\n' +
            '                        <div class=infoName>Давление</div>\n' +
            '                        <div class="info"><span>' + res.main.pressure + 'hpa</span></div>\n' +
            '                    </li>\n' +
            '                    <li class="humidity">\n' +
            '                        <div class=infoName>Влажность</div>\n' +
            '                        <div class="info"><span>'+ res.main.humidity +'%</span></div>\n' +
            '                    </li>\n' +
            '                    <li class="coordinates">\n' +
            '                        <div class=infoName>Координаты</div>\n' +
            '                        <div class="info">[<span>'+ res.coord.lat +'</span>,<span>'+ res.coord.lon +'</span>]</div>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '            </div>';

        document.getElementById("FavouritesCities").appendChild(FavouritesCity);});




}

function clearFavourite(e) {
    removeFavourite(e.parentNode.parentNode.parentNode.getAttribute("name").toLowerCase());
    e.parentNode.parentNode.parentNode.remove();
}